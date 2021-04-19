import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import backicon from "../assets/backicon.svg";
import FB from "../assets/blogfb.svg";
import linkedIn from "../assets/bloglinked.svg";
import URL from "../assets/url.svg";
import Tick from "../assets/tick.svg";
import twitter from "../assets/blogtwitter.svg";
import { SignupSection } from "./signupSection/signupSection";
import { structuredData } from "../config/SEO/Blog/structuredData";
import { websiteLink } from "../config/config";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";

const Post = ({ state, actions, libraries }) => {
  const [copied, setCopied] = useState(false);
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];

  const popularBlogs = Object.values(state.source.post);

  // Get the data of the author.
  // const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date).toLocaleDateString();
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  const CopyText = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 3000)
    }).catch(() => {
      setCopied(false)
    })
  }
  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(state)}
      </script>
      <div className="ContactUsBanner">
        <div className="container">
          <div className="BlogHeader">
            <div className="BackIcon">
              <ul className="list-unstyled backList">
                <Link link="/blog"><li><img alt="back icon" src={backicon} /> Back</li></Link>
              </ul>
            </div>
            <div>
              <ul className="list-unstyled BlogSocialList">
                <li><FacebookShareButton url={websiteLink + state.router.link}><img alt="facebook icon" src={FB} /><span className="SocialText">Share</span></FacebookShareButton></li>
                <li><TwitterShareButton url={websiteLink + state.router.link}><img alt="twitter icon" src={twitter} /><span className="SocialText">Tweet</span></TwitterShareButton></li>
                <li><LinkedinShareButton url={websiteLink + state.router.link}><img alt="linkedIn icon" src={linkedIn} /><span className="SocialText">Post</span></LinkedinShareButton></li>
                {copied ?
                  <li><button className="copiedButton"><img alt="Tick icon" src={Tick} /><span className="SocialText">Copied</span></button></li>
                  :
                  <li><button onClick={() => CopyText(websiteLink + state.router.link)}><img alt="URL icon" src={URL} /><span className="SocialText">URL</span></button></li>
                }
              </ul>
            </div>
          </div>
          <div className="BlogDetailBanner">
            <div className="row">
              <div className="col-md-12">
                <div className="blogDetailImg">
                  {state.theme.featured.showOnPost && (
                    <FeaturedMedia id={post.featured_media} />
                  )}
                </div>
                <h1><div dangerouslySetInnerHTML={{ __html: post.title.rendered }}></div></h1>
                <p className="date">{date}</p>
                {/* <p><div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div></p> */}
                <Content>
                  <Html2React html={post.content.rendered} />
                </Content>
              </div>
            </div>
          </div>
          <div className="customHr">
          </div>
          <div className="MoreBlogs">
            <div className="row">
              {popularBlogs.reverse().slice(0, 3).map(({ type, id }) => {
                const item = state.source[type][id];
                const itemDate = new Date(item.date).toLocaleDateString();
                return (
                  <div className="col-md-4">
                    <div className="MoreBlogsCont">
                      <Link link={item.link}>
                        <div className="moreblogImg">
                          {state.theme.featured.showOnPost && (
                            <FeaturedMedia id={item.featured_media} />
                          )}
                        </div>
                        <span className="date">{itemDate}</span>
                        <h4><div dangerouslySetInnerHTML={{ __html: item.title.rendered }}></div></h4>
                        <p><div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div></p>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <SignupSection />
      </div>
    </>
    // <Container>
    //   <div>
    //     <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

    //     {/* Only display author and date on posts */}
    //     {data.isPost && (
    //       <div>
    //         {author && (
    //           <StyledLink link={author.link}>
    //             <Author>
    //               By <b>{author.name}</b>
    //             </Author>
    //           </StyledLink>
    //         )}
    //         <DateWrapper>
    //           on <b>{date.toDateString()}</b>
    //         </DateWrapper>
    //       </div>
    //     )}
    //   </div>

    //   {/* Look at the settings to see if we should include the featured image */}
    // {state.theme.featured.showOnPost && (
    //   <FeaturedMedia id={post.featured_media} />
    // )}

    //   {/* Render the content using the Html2React component so the HTML is processed
    //    by the processors we included in the libraries.html2react.processors array. */}
    // <Content>
    //   <Html2React html={post.content.rendered} />
    // </Content>
    // </Container>
  ) : null;
};

export default connect(Post);

// const Container = styled.div`
//   width: 800px;
//   margin: 0;
//   padding: 24px;
// `;

// const Title = styled.h1`
//   margin: 0;
//   margin-top: 24px;
//   margin-bottom: 8px;
//   color: rgba(12, 17, 43);
// `;

// const StyledLink = styled(Link)`
//   padding: 15px 0;
// `;

// const Author = styled.p`
//   color: rgba(12, 17, 43, 0.9);
//   font-size: 0.9em;
//   display: inline;
// `;

// const DateWrapper = styled.p`
//   color: rgba(12, 17, 43, 0.9);
//   font-size: 0.9em;
//   display: inline;
// `;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;

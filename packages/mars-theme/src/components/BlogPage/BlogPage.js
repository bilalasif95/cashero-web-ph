import React, { useState, useEffect } from "react";
import { connect, Head } from "frontity";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import TabList from "@material-ui/lab/TabList";
import TabContext from "@material-ui/lab/TabContext";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/lab/TabPanel";
import SignupSection from "../signupSection/signupSection";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import FeaturedMedia from "../featured-media";
import Link from "../link";
import { withTranslation } from "react-i18next";

const BlogPage = ({ state, i18n }) => {
  const [value, setValue] = useState("All");
  const [loading, setLoading] = useState(true);
  const [tabLoading, setTabLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [dropdownOpengbp, setDropdownOpengbp] = useState(false);
  const data = Object.values(state.source.post);
  const blogsCategories = Object.values(state.source.category);
  const togglegbp = () => {
    setDropdownOpengbp((prevState) => !prevState);
  };
  const getPostsFromCategory = ({ post }, categoryId) => Object.keys(post).map(postId => post[postId])
    .filter(({ categories }) => categories.includes(parseInt(categoryId)));
  const handleChange = (event, newValue, id) => {
    setTabLoading(true);
    if (newValue === "All") {
      setValue(newValue);
      setTabLoading(false);
    }
    else if (typeof newValue === 'number') {
      setValue(newValue);
      setCategoryData([])
      const posts = getPostsFromCategory(state.source, newValue)
      setCategoryData(posts)
      setTabLoading(false);
    }
    else {
      setValue(newValue);
      setCategoryData([])
      const posts = getPostsFromCategory(state.source, id)
      setCategoryData(posts)
      setTabLoading(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.cashero.com/blog/" />
        <link rel="alternate" hreflang="en-US" href="https://www.cashero.com/blog/" />
        <link rel="alternate" hreflang="x-default" href="https://www.cashero.com/blog/" />
      </Head>
      <div className="ContactUsBanner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ContactUsCont">
                <h1>{i18n.t("Blog")}</h1>
                <p className="mb-0 blogtext">
                  {i18n.t("Blog_P")}
                </p>
              </div>
            </div>
          </div>
          {loading ?
            <CircularProgress />
            :
            <TabContext value={value}>
              <div className="row">
                <div className="col-md-12">
                  <div className="BlogTabs">
                    <Dropdown
                      isOpen={dropdownOpengbp}
                      toggle={togglegbp}
                    >
                      <DropdownToggle caret>
                        <h1>{value}</h1>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          onClick={(e) =>
                            handleChange(e, "All")
                          }
                        >
                          {i18n.t("All")}
                        </DropdownItem>
                        {blogsCategories.map((res) => (
                          <DropdownItem
                            onClick={(e) =>
                              handleChange(
                                e,
                                res.name,
                                res.id
                              )
                            }
                          >
                            {res.name}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                    <Paper square>
                      <TabList
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="disabled tabs example"
                      >
                        <Tab label="All" value="All" />
                        {blogsCategories.map((res) => (
                          <Tab
                            label={res.name}
                            value={res.id}
                          />
                        ))}
                      </TabList>
                    </Paper>
                  </div>
                </div>
              </div>
              <div className="BlogCont">
                <div className="row">
                  <div className="col-md-12">
                    <TabPanel value="All">
                      <div className="row">
                        {tabLoading ? (
                          <div className="noRecord">
                            <CircularProgress />
                          </div>
                        ) : data.length === 0 ? (
                          <div className="noRecord">
                            {i18n.t("No_record_found")}
                          </div>
                        ) : (
                          <>
                            <div className="col-md-6">
                              {data.reverse().slice(0, 1).map(({ type, id }) => {
                                const item = state.source[type][id];
                                const date = new Date(item.date).toLocaleDateString();
                                return (
                                  <Link link={item.link}>
                                    <div className="BlogBox">
                                      <div className="MainblogImg">
                                        {state.theme.featured.showOnList && (
                                          <FeaturedMedia id={item.featured_media} />
                                        )}
                                      </div>
                                      <div>
                                        <span className="date">
                                          {date}
                                        </span>
                                        <h1>
                                          <div dangerouslySetInnerHTML={{ __html: item.title.rendered }}></div>
                                        </h1>
                                        <p>
                                          <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div>
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                )
                              })}
                            </div>
                            <div className="col-md-6">
                              <div className="sideBlogs">
                                {data.slice(1, 4).map(({ type, id }) => {
                                  const item = state.source[type][id];
                                  const date = new Date(item.date).toLocaleDateString();
                                  return (
                                    <Link link={item.link}>
                                      <div className="BlogSideBox">
                                        <div className="row">
                                          <div className="col-md-6 col-12">
                                            <div className="sideblogImg">
                                              {state.theme.featured.showOnList && (
                                                <FeaturedMedia id={item.featured_media} />
                                              )}
                                            </div>
                                          </div>
                                          <div className="col-md-6 col-12">
                                            <div className="blogCont">
                                              <span className="date mt-0">
                                                {date}
                                              </span>
                                              <h1>
                                                <div dangerouslySetInnerHTML={{ __html: item.title.rendered }}></div>
                                              </h1>
                                              <p>
                                                <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  )
                                })}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="MoreBlogs">
                        <div className="row">
                          {data.slice(4).map(({ type, id }) => {
                            const item = state.source[type][id];
                            const date = new Date(item.date).toLocaleDateString();
                            return (
                              <div className="col-md-4">
                                <Link link={item.link}>
                                  <div className="blogCont">
                                    <div className="MoreBlogsCont">
                                      <div className="moreblogImg">
                                        {state.theme.featured.showOnList && (
                                          <FeaturedMedia id={item.featured_media} />
                                        )}
                                      </div>
                                      <div>
                                        <span className="date">
                                          {date}
                                        </span>
                                        <h1>
                                          <div dangerouslySetInnerHTML={{ __html: item.title.rendered }}></div>
                                        </h1>
                                        <p>
                                          <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </TabPanel>
                    {blogsCategories.map((res) => {
                      if (typeof value === 'number') {
                        return (
                          <TabPanel value={res.id}>
                            <div className="row">
                              {tabLoading ? (
                                <div className="noRecord">
                                  <CircularProgress />
                                </div>
                              ) : categoryData.length === 0 ? (
                                <div className="noRecord">
                                  {i18n.t("No_record_found")}
                                </div>
                              ) : (
                                <>
                                  <div className="col-md-6">
                                    {categoryData.reverse().slice(0, 1).map(({ type, id }) => {
                                      const item = state.source[type][id];
                                      const date = new Date(item.date).toLocaleDateString();
                                      return (
                                        <Link link={item.link}>
                                          <div className="BlogBox">
                                            <div className="MainblogImg">
                                              {state.theme.featured.showOnList && (
                                                <FeaturedMedia id={item.featured_media} />
                                              )}
                                            </div>
                                            <div>
                                              <span className="date">
                                                {date}
                                              </span>
                                              <h1>
                                                <div dangerouslySetInnerHTML={{ __html: item.title.rendered }}></div>
                                              </h1>
                                              <p>
                                                <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div>
                                              </p>
                                            </div>
                                          </div>
                                        </Link>
                                      )
                                    })}
                                  </div>
                                </>
                              )}
                              <div className="col-md-6">
                                <div className="sideBlogs">
                                  {categoryData.slice(1, 4).map(({ type, id }) => {
                                    const item = state.source[type][id];
                                    const date = new Date(item.date).toLocaleDateString();
                                    return (
                                      <Link link={item.link}>
                                        <div className="BlogSideBox">
                                          <div className="row">
                                            <div className="col-md-6 col-12">
                                              <div className="sideblogImg">
                                                {state.theme.featured.showOnList && (
                                                  <FeaturedMedia id={item.featured_media} />
                                                )}
                                              </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                              <div className="blogCont">
                                                <span className="date mt-0">
                                                  {date}
                                                </span>
                                                <h4>
                                                  <div dangerouslySetInnerHTML={{ __html: item.title.rendered }}></div>
                                                </h4>
                                                <p>
                                                  <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Link>
                                    )
                                  })}
                                </div>
                              </div>
                            </div>
                            <div className="MoreBlogs">
                              <div className="row">
                                {categoryData.slice(4).map(({ type, id }) => {
                                  const item = state.source[type][id];
                                  const date = new Date(item.date).toLocaleDateString();
                                  return (
                                    <div className="col-md-4">
                                      <Link link={item.link}>
                                        <div className="blogCont">
                                          <div className="MoreBlogsCont">
                                            <div className="moreblogImg">
                                              {state.theme.featured.showOnList && (
                                                <FeaturedMedia id={item.featured_media} />
                                              )}
                                            </div>
                                            <div>
                                              <span className="date">
                                                {date}
                                              </span>
                                              <h4>
                                                <div dangerouslySetInnerHTML={{ __html: item.title.rendered }}></div>
                                              </h4>
                                              <p>
                                                <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          </TabPanel>
                        )
                      }
                      else {
                        return (
                          <TabPanel value={res.name}>
                            <div className="row">
                              {tabLoading ? (
                                <div className="noRecord">
                                  <CircularProgress />
                                </div>
                              ) : categoryData.length === 0 ? (
                                <div className="noRecord">
                                  {i18n.t("No_record_found")}
                                </div>
                              ) : (
                                <>
                                  <div className="col-md-6">
                                    {categoryData.reverse().slice(0, 1).map(({ type, id }) => {
                                      const item = state.source[type][id];
                                      const date = new Date(item.date).toLocaleDateString();
                                      return (
                                        <Link link={item.link}>
                                          <div className="BlogBox">
                                            <div className="MainblogImg">
                                              {state.theme.featured.showOnList && (
                                                <FeaturedMedia id={item.featured_media} />
                                              )}
                                            </div>
                                            <div>
                                              <span className="date">
                                                {date}
                                              </span>
                                              <h1>
                                                <div dangerouslySetInnerHTML={{ __html: item.title.rendered }}></div>
                                              </h1>
                                              <p>
                                                <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div>
                                              </p>
                                            </div>
                                          </div>
                                        </Link>
                                      )
                                    })}
                                  </div>
                                </>
                              )}
                              <div className="col-md-6">
                                <div className="sideBlogs">
                                  {categoryData.slice(1, 4).map(({ type, id }) => {
                                    const item = state.source[type][id];
                                    const date = new Date(item.date).toLocaleDateString();
                                    return (
                                      <Link link={item.link}>
                                        <div className="BlogSideBox">
                                          <div className="row">
                                            <div className="col-md-6 col-12">
                                              <div className="sideblogImg">
                                                {state.theme.featured.showOnList && (
                                                  <FeaturedMedia id={item.featured_media} />
                                                )}
                                              </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                              <div className="blogCont">
                                                <span className="date mt-0">
                                                  {date}
                                                </span>
                                                <h4>
                                                  <div dangerouslySetInnerHTML={{ __html: item.title.rendered }}></div>
                                                </h4>
                                                <p>
                                                  <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Link>
                                    )
                                  })}
                                </div>
                              </div>
                            </div>
                            <div className="MoreBlogs">
                              <div className="row">
                                <div className="col-md-4">
                                  {categoryData.slice(4).map(({ type, id }) => {
                                    const item = state.source[type][id];
                                    const date = new Date(item.date).toLocaleDateString();
                                    return (
                                      <Link link={item.link}>
                                        <div className="blogCont">
                                          <div className="MoreBlogsCont">
                                            <div className="moreblogImg">
                                              {state.theme.featured.showOnList && (
                                                <FeaturedMedia id={item.featured_media} />
                                              )}
                                            </div>
                                            <div>
                                              <span className="date">
                                                {date}
                                              </span>
                                              <h4>
                                                <div dangerouslySetInnerHTML={{ __html: item.title.rendered }}></div>
                                              </h4>
                                              <p>
                                                <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </Link>
                                    )
                                  })}
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
            </TabContext>
          }
        </div>
        <SignupSection />
      </div>
    </>
  );
}

export default connect(withTranslation()(BlogPage));

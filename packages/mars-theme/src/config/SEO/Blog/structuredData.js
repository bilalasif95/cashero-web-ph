import { websiteLink } from "../../config";

export const structuredData = blog => {
  const data = blog.source.get(blog.router.link);
  const post = blog.source[data.type][data.id];
  const author = blog.source.author[post.author];
  const media = blog.source.attachment[post.featured_media];
  return JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "Article",
    author: author.name,
    dateModified: new Date(post.date).toLocaleString(),
    datePublished: new Date(post.date).toLocaleString(),
    // description: post.excerpt.rendered,
    headline: post.title.rendered,
    image: media && media.source_url,
    mainEntityOfPage: websiteLink + blog.router.link,
    name: post.title.rendered,
    publisher: {
      "@type": "Organization",
      logo: {
        "@type": "ImageObject",
        url: "https://firebasestorage.googleapis.com/v0/b/cashero-828.appspot.com/o/website%2FWjbRyFw.png?alt=media"
      },
      name: blog.frontity.title
    },
    url: websiteLink + blog.router.link
  });
};

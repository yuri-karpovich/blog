const config = {
  // title will be displayed on the top of your site
  title: "Digital Garden",
  // adding a description helps with SEO
  description: "This is a digital garden created by Yuri Karpovich",
  // author of site displayed on the bottom of your site
  author: "Yuri Karpovich",
  // logo image
  // authorLogo: "/images/logo.svg",
  // url to author website
  domain: "https://invisible.place/",
  // links to the pages you want to link to in the navbar
  navLinks: [{ href: "/About%20Me", name: "About Me" }],
  search: {
    provider: "kbar",
  },
  showComments: true,
  // comments: {
  //   provider: "disqus",
  //   config: {
  //     shortname: "invisible-place",
  //   },
  // },
  comments: {
    provider: "giscus",
    config: {
      repo: "yuri-karpovich/blog",
      repositoryId: "40159463",
      category: "Blog Comments",
      categoryId: "40159463",
    },
  },
};

export default config;
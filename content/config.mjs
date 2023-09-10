const config = {
  title: "Digital Garden",
  // adding a description helps with SEO
  description: "This is a digital garden created by Yuri Karpovich",
  author: "Yuri Karpovich",
  // logo image
  authorLogo: "/assets/avatar.png",
  // url to author website
  domain: "https://invisible.place/",
  navLinks: [
      { href: "/About%20Me", name: "About Me" },
      { href: "/blog", name: "Blog" },
  ],
  search: {
    provider: "kbar",
  },
  defaultAuthor: "Yuri Karpovich",
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
      repositoryId: "R_kgDOKREp_w",
      category: "Blog Comments",
      categoryId: "DIC_kwDOKREp_84CZMjn",
    },
  },

  // comments: {
  //   provider: "utterances",
  //   config: {
  //     repo: "yuri-karpovich/blog",
  //     label: "blog-comment",
  //   },
  // },
};

export default config;
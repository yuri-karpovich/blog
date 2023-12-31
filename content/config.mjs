const config = {
  title: "Yuri Karpovich",
  // adding a description helps with SEO
  description: "This is a digital garden created by Yuri Karpovich",
  author: "Yuri Karpovich",
  // logo image
  authorLogo: "/assets/avatar.png",
  // url to author website
  domain: "https://invisible.place/",
  navLinks: [
      { href: "/blog", name: "Blog" },
  ],
  analytics: "G-0B4QWRKFJX",
  search: {
    provider: "kbar",
  },
  defaultAuthor: "yuri-karpovich",
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
// Note: having length != 4 will mess with layout based on how the site is styled
const bookmarks = [
  {
    title: "Personal",
    links: [
      { name: "Todo", url: "https://todo.localhost.direct" },
      { name: "Wiki", url: "http://wiki.mw" },
      { name: "WP notes", url: "http://notes.mw" },
      { name: "Transmission", url: "http://10.8.0.5:9091/transmission/web/"},
      { name: "Syncthing", url: "http://10.8.0.5:8384/"},
    ],
  },
  {
    title: "Storage",
    links: [
      { name: "Minio storage", url: "http://s3storage.mw:9001" },
      { name: "Backblaze", url: "https://secure.backblaze.com/b2_buckets.htm"},
      { name: "AWS", url: "https://s3.console.aws.amazon.com/s3/home?region=eu-central-1"}
    ]
  },
  {
    title: "Tools",
    links: [
      { name: "Intranet Mysql", url: "http://mysql.mw" },
      { name: "Mail alias", url: "https://mailalias.localhost.direct" },
    ],
  },
  {
    title: "Billing",
    links: [
      { name: "Yota", url: "https://lk.yota.ru"},
      { name: "Netis", url: "https://stat.netis.ru/"}
    ]
  },
  {
    title: "Symfony & Laravel",
    links: [
      { name: "SymfonyCasts", url: "https://symfonycasts.com/" },
      { name: "Laravel news", url: "https://laravel-news.com/category/news"}
    ]
  },
  {
    title: "Hosting",
    links: [
      {
        name: "Fly.io",
        url: "https://fly.io/dashboard"
      },
      {
        name: "DomCLoud",
        url: "https://my.domcloud.co/login"
      }
    ]
  }
];
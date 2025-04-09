interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '叶子飞锻炼记录',
  siteUrl: 'https://blog.fengsy.cn',
  logo: 'https://pan.4a1801.life:11443/d/public/logo2.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: '📝 Blog',
      url: 'https://blog.fengsy.cn',
    },
    {
      name: '⭐ Repo',
      url: 'https://github.com/arthurfsy2/workouts_page_fsy',
    },
  ],
};

export default data;

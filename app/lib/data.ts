import axios from 'axios';
import { unstable_noStore as noStore } from 'next/cache';
import { notFound } from 'next/navigation';


export async function fetchProfilePicURL() {
  noStore();
  try {
    const response = await axios.get(`${process.env.STRAPI_URL}/api/profile?populate=*`, {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
      },
    });
    const profile = await response.data;
    const url = process.env.STRAPI_URL + profile.data.attributes.pic.data.attributes.url
    return url;
  } catch (error) {
    return '/tree.png';
  }
}

export async function fetchLatestArticle() {
  noStore();
  try {
    const response = await axios.get(`${process.env.STRAPI_URL}/api/articles?sort=date:desc&pagination[limit]=1&populate=banner&fields[0]=title&fields[1]=subtitle&fields[2]=readTime&fields[3]=date&fields[4]=views&fields[5]=slug`, {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
      },
    });
    const article = await response.data;
    const info = article.data[0].attributes;
    info.banner = process.env.STRAPI_URL + info.banner.data.attributes.url;
    return info;
  } catch (error) {
    throw new Error('Error fetching data');
  }
}

export async function fetchArticle(id: string) {
  noStore();
  try {
    const response = await axios.get(`${process.env.STRAPI_URL}/api/articles/${id}?populate=banner&fields[0]=title&fields[1]=subtitle&fields[2]=readTime&fields[3]=date&fields[4]=views&fields[5]=slug`, {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
      },
    });
    const article = await response.data;
    const info = article.data.attributes;
    info.banner = process.env.STRAPI_URL + info.banner.data.attributes.url;
    return info;
  } catch (error) {
    throw new Error('Error fetching data');
  }
}

export async function fetchArticleFull(slug: string) {
  noStore();
  try {
    const response = await axios.get(`${process.env.STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=banner&fields[0]=title&fields[1]=subtitle&fields[2]=readTime&fields[3]=date&fields[4]=views&fields[5]=content`, {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
      },
    });
    const article = await response.data;
    const info = article.data[0].attributes;
    info.banner = process.env.STRAPI_URL + info.banner.data.attributes.url;

    await axios.put(`${process.env.STRAPI_URL}/api/articles/${article.data[0].id}`, {
      data: {
        views: info.views + 1,
      }
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
      },
    });

    return info;
  } catch (error) {
    notFound();
  }
}

export async function fetchArticlesIDs() {
  noStore();
  try {
    const response = await axios.get(`${process.env.STRAPI_URL}/api/articles?sort=date:desc&fields=id`, {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
      },
    });
    const data = await response.data;
    const ids = data.data.map((article: any) => article.id);
    return ids;
  } catch (error) {
    throw new Error('Error fetching data');
  }
}

export async function fetchProjectsIDs(highlightedOnly: boolean) {
  noStore();
  try {
    const response = await axios.get(`${process.env.STRAPI_URL}/api/projects?${highlightedOnly ? "filters[highlight][$eq]=true&" : ''}sort=date:desc&fields=id`, {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
      },
    });
    const projects = await response.data;
    const ids = projects.data.map((project: any) => project.id);
    return ids
  } catch (error) {
    throw new Error('Error fetching data');
  }
}

export async function fetchProject(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 1500));
  noStore();
  try {
    const response = await axios.get(`${process.env.STRAPI_URL}/api/projects/${id}?populate=banner&fields[0]=title&fields[1]=subtitle&fields[2]=data`, {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
      },
    });
    const project = await response.data;
    const info = project.data.attributes;
    info.banner = process.env.STRAPI_URL + info.banner.data.attributes.url;
    return info;
  } catch (error) {
    throw new Error('Error fetching data');
  }
}
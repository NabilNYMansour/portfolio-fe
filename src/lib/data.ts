"use server";

import axios from 'axios';
import { unstable_noStore as noStore } from 'next/cache';
import { notFound } from 'next/navigation';

const LOCAL = process.env.STRAPI_URL_LOCAL;
const ADMIN = process.env.STRAPI_URL_ADMIN;
const AUTH = process.env.STRAPI_AUTH_TOKEN;

export async function fetchProfilePicURL() {
  noStore();
  try {
    const params = new URLSearchParams(
      {
        'populate': '*'
      }
    ).toString();
    const response = await axios.get(`${LOCAL}/api/profile?${params}`, {
      headers: {
        'Authorization': `Bearer ${AUTH}`,
      },
    });
    const profile = await response.data;
    const url = LOCAL + profile.data.attributes.pic.data.attributes.url
    return url;
  } catch (error) {
    return '/tree.png';
  }
}

export async function fetchLatestArticle() {
  noStore();
  try {
    const params = new URLSearchParams(
      {
        'sort': 'date:desc',
        'pagination': '[limit]=1',
        'populate': 'banner',
        'fields[0]': 'title',
        'fields[1]': 'subtitle',
        'fields[2]': 'readTime',
        'fields[3]': 'date',
        'fields[4]': 'views',
        'fields[5]': 'slug',
      }
    ).toString();
    const response = await axios.get(`${LOCAL}/api/articles?${params}`, {
      headers: {
        'Authorization': `Bearer ${AUTH}`,
      },
    });
    const article = await response.data;
    const info = article.data[0].attributes;
    info.banner = LOCAL + info.banner.data.attributes.url;
    return info;
  } catch (error) {
    throw new Error('Error fetching data');
  }
}

export async function fetchArticle(id: string) {
  noStore();
  try {
    const params = new URLSearchParams(
      {
        'populate': 'banner',
        'fields[0]': 'title',
        'fields[1]': 'subtitle',
        'fields[2]': 'readTime',
        'fields[3]': 'date',
        'fields[4]': 'views',
        'fields[5]': 'slug',
      }
    ).toString();
    const response = await axios.get(`${LOCAL}/api/articles/${id}?${params}`, {
      headers: {
        'Authorization': `Bearer ${AUTH}`,
      },
    });
    const article = await response.data;
    const info = article.data.attributes;
    info.banner = LOCAL + info.banner.data.attributes.url;
    return info;
  } catch (error) {
    throw new Error('Error fetching data');
  }
}

export async function fetchArticleFull(slug: string, useAdminUrl: boolean = false) {
  noStore();
  try {
    const params = new URLSearchParams(
      {
        'filters[slug][$eq]': `${slug}`,
        'populate': 'banner',
        'fields[0]': 'title',
        'fields[1]': 'subtitle',
        'fields[2]': 'readTime',
        'fields[3]': 'date',
        'fields[4]': 'views',
        'fields[5]': 'content',
        'fields[6]': 'tags',
      }
    ).toString();
    const response = await axios.get(`${LOCAL}/api/articles?${params}`, {
      headers: {
        'Authorization': `Bearer ${AUTH}`,
      },
    });
    const article = await response.data;
    const info = article.data[0].attributes;
    info.banner = (useAdminUrl ? ADMIN : LOCAL)
      + info.banner.data.attributes.url;
    await axios.put(`${LOCAL}/api/articles/${article.data[0].id}`, {
      data: {
        views: info.views + 1,
      }
    }, {
      headers: {
        'Authorization': `Bearer ${AUTH}`,
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
    const params = new URLSearchParams(
      {
        'sort': 'date:desc',
        'fields': 'id',
      }
    ).toString();
    const response = await axios.get(`${LOCAL}/api/articles?${params}`, {
      headers: {
        'Authorization': `Bearer ${AUTH}`,
      },
    });
    const data = await response.data;
    const ids = data.data.map((article: any) => article.id);
    return ids;
  } catch (error) {
    throw new Error('Error fetching data');
  }
}

export async function fetchArticlesSlugs() {
  noStore();
  try {
    const params = new URLSearchParams(
      {
        'sort': 'date:desc',
        'fields': 'slug',
      }
    ).toString();
    const response = await axios.get(`${LOCAL}/api/articles?${params}`, {
      headers: {
        'Authorization': `Bearer ${AUTH}`,
      },
    });
    const data = await response.data;
    const slugs = data.data.map((article: any) => article.attributes.slug);
    return slugs;
  } catch (error) {
    return [];
  }
}

export async function fetchProjectsIDs(highlightedOnly: boolean) {
  noStore();
  try {
    const params = new URLSearchParams(
      {
        'sort': 'date:desc',
        'fields': 'id',
      }
    );
    if (highlightedOnly) {
      params.append('filters[highlight][$eq]', 'true');
    }
    const paramsString = params.toString();
    const response = await axios.get(`${LOCAL}/api/projects?${paramsString}`, {
      headers: {
        'Authorization': `Bearer ${AUTH}`,
      },
    });
    const projects = await response.data;
    const ids = projects.data.map((project: any) => project.id);
    return ids
  } catch (error) {
    throw new Error('Error fetching data');
  }
}

export async function fetchProjectsLinks() {
  noStore();
  try {
    const params = new URLSearchParams(
      {
        'sort': 'date:desc',
        'fields': 'data',
      }
    ).toString();
    const response = await axios.get(`${LOCAL}/api/projects?${params}`, {
      headers: {
        'Authorization': `Bearer ${AUTH}`,
      },
    });
    const projects = await response.data;
    const links = projects.data.map((project: any) => project.attributes)
      .filter((project: any) => project.data.link)
      .map((project: any) => project.data.link);
    return links;
  } catch (error) {
    return [];
  }
}

export async function fetchProject(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 1500));
  noStore();
  try {
    const params = new URLSearchParams(
      {
        'populate': 'banner',
        'fields[0]': 'title',
        'fields[1]': 'subtitle',
        'fields[2]': 'data',
      }
    ).toString();
    const response = await axios.get(`${LOCAL}/api/projects/${id}?${params}`, {
      headers: {
        'Authorization': `Bearer ${AUTH}`,
      },
    });
    const project = await response.data;
    const info = project.data.attributes;
    info.banner = LOCAL + info.banner.data.attributes.url;
    return info;
  } catch (error) {
    throw new Error('Error fetching data');
  }
}
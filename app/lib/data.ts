//!!!!!!!!!!!!!!!!!!!!!!TODO: learn how caching works in next.js!!!!!!!!!!!!!!!!!!!!!!//
//!!!!!!!!!!!!!!!!!!!!!!TODO: learn how middleware works in next.js!!!!!!!!!!!!!!!!!!!!!!//
//!!!!!!!!!!!!!!!!!!!!!!TODO: learn what use strict is!!!!!!!!!!!!!!!!!!!!!!//

import axios from 'axios';
import { unstable_noStore as noStore } from 'next/cache';


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
    // throw new Error('Error fetching data');
    // console.error('Error:', error);
    return null;
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
    console.error('Error fetching data:', error);
    return null;
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
    console.error('Error fetching data:', error);
    return null;
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

    // Increment views !!!!!!!!!!TODO: THIS LEADS TO RACE CONDITIONS!!!!!!!!!!
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
    return null;
  }
}

export async function fetchArticlesIDs() {
  noStore();
  try {
    const response = await axios.get(`${process.env.STRAPI_URL}/api/articles?fields=id`, {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
      },
    });
    const data = await response.data;
    const ids = data.data.map((article: any) => article.id);
    return ids;
  } catch (error) {
    throw new Error('Error fetching data');
    console.error('Error fetching data:', error);
    return null;
  }
}

/*
<iframe height="650" style="width: 100%;" scrolling="no" title="Ray Marching 2D" src="https://codepen.io/NabilNYMansour/embed/rNgOKRx?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/NabilNYMansour/pen/rNgOKRx">
  Ray Marching 2D</a> by Nabil Mansour (<a href="https://codepen.io/NabilNYMansour">@NabilNYMansour</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/1CW_4NuAjGs?si=PSbpSUIXGgmGCAir" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
*/
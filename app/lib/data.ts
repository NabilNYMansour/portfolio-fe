// import { unstable_noStore as noStore } from 'next/cache';

const strapiUrl = 'http://localhost:1337';


// TODO: learn how cahcing works in next.js
export async function fetchData() {
  // throw new Error('Error fetching data');
  try {
    const response = await fetch('http://localhost:1337/api/profile?populate=*');
    const profile = await response.json();
    const url = strapiUrl + profile.data.attributes.pic.data.attributes.url
    return url;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
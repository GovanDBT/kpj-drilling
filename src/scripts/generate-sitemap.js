// generate-sitemap.js
import { create } from 'xmlbuilder2';
import fs from 'fs';

// Define your routes
const routes = [
  '/',
  '/about',
  '/services',
  '/quote',
  '/products',
];

// Base URL of your site
const baseUrl = 'https://kpjdrilling.co.bw';

// Create the XML sitemap
const urlset = create({ version: '1.0' })
  .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

// Add each route
routes.forEach((route) => {
  if (route.includes(':')) {
    // Skip dynamic routes or replace with sample
    return;
  }

  urlset
    .ele('url')
    .ele('loc')
    .txt(`${baseUrl}${route}`)
    .up()
    .ele('changefreq')
    .txt('weekly')
    .up()
    .ele('priority')
    .txt('0.8')
    .up()
    .up();
});

// Convert to XML string
const xml = urlset.end({ prettyPrint: true });

// Save to public/sitemap.xml
fs.writeFileSync('./public/sitemap.xml', xml);

console.log('✅ Sitemap generated at public/sitemap.xml');

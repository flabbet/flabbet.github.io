import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Unhinged Cogs',
    description: 'I can make it better - a blog about remaking those little and (way too) big things in programming world.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md*')),
    customData: `
    <language>en</language>
    <follow_challenge>
    <feedId>149083849102513152</feedId>
    <userId>149083075016414208</userId>
    </follow_challenge>
    `,
  });
}

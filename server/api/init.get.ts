// @ts-nocheck
import { Client } from "@notionhq/client"
import { PageData } from "../../shared/types/hero"

const notion = new Client({ auth: process.env.NOTION_INTEGRATION_SECRET })

const skills_database_id = process.env.NOTION_SKILLS_DB_ID || ""

const DEFAULT_PAGE_DATA: PageData = {
  skills: {
    hard_skills: [],
    expertise: [],
    languages: [],
  }
}

const pageData: PageData = DEFAULT_PAGE_DATA as PageData;

async function getSkills() {
  const data = await notion.databases.query({
    database_id: skills_database_id,
    sorts: [
      {
        property: "level",
        direction: "descending",
      },
    ],
  });

  return data;
}

getSkills().then((data) => {
  data.results.forEach((item) => {
    const name = item.properties.name
      ? item.properties.name.title[0].plain_text
      : "";
    const icon = item.icon ? item.icon.external.url : "";
    const type = item.properties.type.select.name as SkillType;
    const level = item.properties.level.status.name as SkillLevel;

    pageData.skills[type].push({
      icon: icon,
      name: name,
      level: level,
      type: type,
    });
  });
});

export default defineEventHandler(() => pageData);


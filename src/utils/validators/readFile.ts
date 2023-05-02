import fs from 'fs';
import handlebars from 'handlebars';

export const readHTMLFile = async function (path: string, context: any) {
  try {
    const html = await fs.promises.readFile(path, { encoding: 'utf-8' });
    const template = handlebars.compile(html);

    return template(context);
  } catch (error) {
    throw error;
  }
};

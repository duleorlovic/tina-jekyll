import type { Collection } from 'tinacms';

const Page: Collection = {
  label: 'Pages',
  name: 'page',
  path: "",
  match: {
    exclude: "_posts/**/*",
  },
  format: 'md',
  fields: [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      options: ["home", "post"],
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
};

export default Page;

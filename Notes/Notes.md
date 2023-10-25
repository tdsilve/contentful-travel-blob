# How to Render Contentful Rich Text

To render Contentful rich text, follow these steps:

1. **Install `@contentful/rich-text-react-renderer`**

   ```
   yarn add @contentful/rich-text-react-renderer
   ```

   Contentful rich text is initially an object, and you can use the documentToReactComponents function to convert this object into React components. Here's how you can set it up in your code:

```
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export const RichText = ({ content }) => {
  return <div>{documentToReactComponents(content)}</div>;
```

2. **Install `@tailwindcss/typography`**

While the content will render correctly, the styling may not work as expected. To style the content, you can use @tailwindcss/typography. Follow these steps:

```
  yarn add @tailwindcss/typography
```

Add the @tailwindcss/typography plugin to your Tailwind CSS configuration file (tailwind.config.js):

```module.exports = {
  // ...
  plugins: [require('@tailwindcss/typography')],
};
```

Final result:

```
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const RichText = ({ content }) => {
  return <div className="prose">{documentToReactComponents(content)}</div>;
}
```

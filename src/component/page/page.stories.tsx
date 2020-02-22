import * as React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
} from "@storybook/addon-knobs";

import { Page } from "./page.component";

const stories = storiesOf("Page", module).addParameters({
  component: Page,
  decorators: [withKnobs],
});

stories.add("Default", () => {
  const content = text("Content", "Content");

  return (
    <Page>{content}</Page>
  );
});

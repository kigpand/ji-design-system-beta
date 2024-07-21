import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["button"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    $primary: true,
    label: "primary",
    onClick: () => console.log("primary"),
  },
};

export const Secondary: Story = {
  args: {
    label: "secondary",
    onClick: () => console.log("secondary"),
  },
};

export const Custom: Story = {
  args: {
    $primary: true,
    label: "custom",
    style: {
      backgroundColor: "skyblue",
      width: "100px",
      border: "1px solid blue",
    },
    onClick: () => console.log("custom"),
  },
};

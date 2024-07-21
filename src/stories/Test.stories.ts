import { Meta, StoryObj } from "@storybook/react";
import Test from "../components/Test";

const meta: Meta = {
  title: "Example/test component",
  component: Test,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Test",
  },
};

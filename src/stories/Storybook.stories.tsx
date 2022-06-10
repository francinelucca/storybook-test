import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const StorybookComponent = () => <div>This is the storybook story 123</div>


export default {
  title: 'Example/Storybook',
  component: StorybookComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof StorybookComponent>;

const Template: ComponentStory<any> = (args) => <StorybookComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};

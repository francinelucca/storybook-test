import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const NewStoryComponent = () => <div>Hiiiii - Edit</div>


export default {
  title: 'Example/NewStory',
  component: NewStoryComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NewStoryComponent>;

const Template: ComponentStory<any> = (args) => <NewStoryComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};

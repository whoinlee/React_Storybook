import Card from "./Card";
import { options } from './constants';

export default {
    title: "Card",
    component: Card,
    args: {
        children: "I'm a card by default"
    },
    argTypes: {
        color: {
            description: "**options:**",
            table: {
                type: {
                    summary: options.colors.map(option => `'${option}'`).join("|")
                }
            },
            control: {
                type: "select",
                options: options.colors
            }
        },
        size: {
            description: "**options:**",
            table: {
                type: {
                    summary: options.sizes.map(option => `'${option}'`).join("|")
                }
            },
            control: {
                type: "select",
                options: options.sizes
            }
        }
    }
}

const Template = (args) => <Card {...args}/>;

const ListTemplate = ({items, ...args}) => items.map(
    (item, i) => <Card key={i} {...args} {...item} />);

// export const Default = () => <Card />;
export const Default = Template.bind({});

export const Clickable = Template.bind({});
Clickable.args = {
    isClickable : true
}

export const Draggable = Template.bind({});
Draggable.args = {
    isDraggable : true
}

// export const Colors = () => options.colors.map((color, i) => {
//     return <Card key={i} color={color} />
// });
export const Colors = ListTemplate.bind({});
Colors.args = {
    items: options.colors.map((color) => ({color})),
}

// export const Sizes = () => options.sizes.map((size, i) => {
//     return <Card key={i} size={size} />
// });
export const Sizes = ListTemplate.bind({});
Sizes.args = {
    items: options.sizes.map((size) => ({size})),
}
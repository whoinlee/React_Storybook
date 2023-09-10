import Card from "./Card";
import { options } from './constants';

export default {
    title: "Card",
    component: Card
}

export const Default = () => <Card />;

export const Colors = () => options.colors.map((color, i) => {
    return <Card key={i} color={color} />
});

export const Sizes = () => options.sizes.map((size, i) => {
    return <Card key={i} size={size} />
});
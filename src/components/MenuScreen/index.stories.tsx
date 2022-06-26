import { Meta } from "@storybook/react/types-6-0";
import { MenuScreen } from ".";

export default {
    title: `Small Components/MenuScreen`,
} as Meta;

export const Index = () => (
    <MenuScreen>
        <div>Child1 Placeholder</div>
        <div>Child2 Placeholder</div>
    </MenuScreen>
);

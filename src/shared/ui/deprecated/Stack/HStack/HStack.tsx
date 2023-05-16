import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;
/**
 * @deprecated
 */
export const HStack = (props: HStackProps) => (
    <Flex
        direction="row"
        {...props}
    />
);

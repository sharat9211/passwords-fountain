import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import {
    Wrapper,
    Heading,
    IconAuthorList,
    IconInfo,
} from './iconAuthors.styles';
import { Text } from '@/modules/localisation/components/text';

interface IconAuthor {
    id: number;
    iconName: string;
    author: string;
}

const iconAuthors: IconAuthor[] = [
    { id: 0, iconName: 'Padlock icon', author: 'Pixel perfect' },
    { id: 1, iconName: 'Success icon', author: 'Alfredo Hernandez' },
    { id: 2, iconName: 'Error icon', author: 'Freepik' },
    { id: 3, iconName: 'Fountain icon', author: 'Smashicons' },
    { id: 4, iconName: 'Database icon', author: 'Smashicons' },
    { id: 5, iconName: 'Heart icon', author: 'Smashicons' },
    { id: 6, iconName: 'Globe icon', author: 'Freepik' },
    { id: 7, iconName: 'Recycle bin icon', author: 'Freepik' },
    { id: 8, iconName: 'Eye', author: 'Kiranshastry' },
    { id: 9, iconName: 'Github', author: 'Freepik' },
    { id: 10, iconName: 'Twitter', author: 'Pixel perfect' },
];

export const IconAuthors: TypedComponent<Props> = () => {
    const renderAuthors = (): VNode[] =>
        iconAuthors.map(({ id, iconName, author }) => (
            <IconInfo key={id}>
                {iconName} - {author}
            </IconInfo>
        ));

    return (
        <Wrapper>
            <Heading>
                <Text>home.thanksToIconAuthors</Text>
            </Heading>
            <IconAuthorList>{renderAuthors()}</IconAuthorList>
        </Wrapper>
    );
};

interface Props {}

IconAuthors.propTypes = {};

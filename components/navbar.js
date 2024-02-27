import NextLink from 'next/link';
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';



const LinkItem = ({ href, path, children }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'grassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}>
                {children}
                </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props;

    return(
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter: 'blur(10px)'}}
        zIndex={1}
        {...props}
        >
            <Container 
                display = "flex" 
                p={2} 
                maxW = "container.md" 
                wrap="wrap" 
                align="center" 
                justify="space-between"
            >
                <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" mr={150} letterSpacing={"tighter"}>
                 Don Colchon
            </Heading>
            </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
            <LinkItem href="/status" path={path}>
                Server status
            </LinkItem>
            <LinkItem href="/data" path={path}>
                Archive
            </LinkItem>
            <LinkItem href="/settings" path={path}>
                Settings
            </LinkItem>
            <LinkItem href="/logout" path={path}>
                Log out
            </LinkItem>
        
        
        
        
        {/* Menu para moviles */}
        </Stack>
    <Box flex={1} align="left">
        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant = "outline" aria-label="Options"/>
            </Menu>

    </Box>
    </Box>

        </Container>
        </Box>
    )
}

export default Navbar;
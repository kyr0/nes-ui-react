import { useCallback, useEffect, useState } from 'react';
import { rememberDarkModeUserSetting, setDarkModeActivation, Text, IconButton, PixelIcon, Row, Br, Heading, List, Hr, Col, Toolbar, Spacer } from '../dist';
import { BadgeDmeo } from '../components/demos/BadgeDemo';
import { ButtonDemo } from '../components/demos/ButtonDemo';
import { CheckboxDemo } from '../components/demos/CheckboxDemo';
import { ColorPaletteDemo } from '../components/demos/ColorPaletteDemo';
import { ContainerDemo } from '../components/demos/ContainerDemo';
import { GridDemo } from '../components/demos/GridDemo';
import { HeroDemo } from '../components/demos/HeroDemo';
import { HrDemo } from '../components/demos/HrDemo';
import { IconButtonDemo } from '../components/demos/IconButtonDemo';
import { InputDemo } from '../components/demos/InputDemo';
import { ListDemo } from '../components/demos/ListDemo';
import { MenuDemo } from '../components/demos/MenuDemo';
import { ModalDemo } from '../components/demos/ModalDemo';
import { PixelatedImages } from '../components/demos/PixelatedImages';
import { PixelBorderDemo } from '../components/demos/PixelBorderDemo';
import { PixelIconDemo } from '../components/demos/PixelIconDemo';
import { ProgressDemo } from '../components/demos/ProgressDemo';
import { RadioDemo } from '../components/demos/RadioDemo';
import { SelectDemo } from '../components/demos/SelectDemo';
import { TableDemo } from '../components/demos/TableDemo';
import { TextAreaDemo } from '../components/demos/TextAreaDemo';
import { ToastDemo } from '../components/demos/ToastDemo';
import { ToolbarDemo } from '../components/demos/ToolbarDemo';
import { TypographyDemo } from '../components/demos/TypographyDemo';

// @ts-ignore
import styles from '../styles/Index.module.css';

const Home = (): JSX.Element => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const userDarkModeSetting = rememberDarkModeUserSetting();
    setDarkMode(userDarkModeSetting);
    setDarkModeActivation(userDarkModeSetting);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode);
    setDarkModeActivation(!darkMode);
  }, [darkMode]);

  // TODO: add source code buttons with links
  // TODO: include https://www.youtube.com/watch?v=1_BnF67v58M as hero or https://www.youtube.com/watch?v=pYFjUj80ZEA
  // TODO: demo canvas pixelized rendering
  return (
    <main className={styles.main}>
    
      <Toolbar borderless className={styles.headerToolbar}>
        <Spacer />
        <PixelIcon inverted={false} name={"pixelicon-nes-ui-logo"} size='medium' style={{ marginRight: 8 }} />
        <Heading>nes-ui-react</Heading>
        <Spacer />
        <IconButton onClick={toggleDarkMode} color="warning">
          <PixelIcon name={darkMode ? "pixelicon-sun" : 'pixelicon-moon'} inverted={false} size='small' />
        </IconButton>
      </Toolbar>
      
      <IconButton borderInverted size="small" color="primary" className={styles.scrollToTop} onClick={() => window.scrollTo(0, 0)}>
        <PixelIcon size='small' name='pixelicon-arrow-up' />
      </IconButton>
      
      <Row style={{ marginTop: '2em' }}>
        
        <Br />

        <Heading size='xlarge' centered>kyr0/nes-ui-react</Heading>

        <Br size='medium'/>

        <Text>Welcome back to 1986! This is NES UI for React, the most comprehensive anachronistic, retro UI component library for React JS.</Text>

        <Text>This design system paints the web in 8 bits. Altough the framework can handle light mode, the dark mode feels more like back in the days.</Text>

        <Text>The library works great for games, websites and all kinds of retro web apps.</Text>

        <Text>If you'd like to see a feature added or bug fixed, please consider becoming a contributor. You're welcome here! :)</Text>

        <Br />
        
        <Text>Features:</Text>
        <List size="small" styleType='circle'>
          <li>Refactored and bugfixed the whole NES.css codebase, now featuring CSS custom properties</li>
          <li>Written in modern Sass and TypeScript</li>
          <li>Refactored dark mode support with automatic theme default and app-wide switching</li>
          <li>Updated, standard NTSC color palette; all colors exported to TypeScript</li>
          <li>Only vector-scalable techniques are used (CSS border-shadow, SVG and Sass bitsets)</li>
          <li>Added a simple grid layout (2, 3 and 4 columns supported)</li>
          <li>Helper CSS classes like color inversion, pixel borders etc.</li>
          <li>Updated cursors and introduced the pixelated scrollbar</li>
          <li>Many new components added like: Hero, Toolbar components, Modal components, Menu, new input fields</li>
          <li>MIT licensed</li>
        </List>

        <Br size='large' />

        <Hr color="disabled" height={2} />

        <Br size='large' />

        <ColorPaletteDemo />

        <Br size='large' />

        <Heading size='xlarge' centered>Components</Heading>

        <Text>The library consists of typical, anachronistic and futuristic NES-style UI components. Every component comes with limited functionality that helps limiting the risk to introduce too much modern flavor.</Text>
        <Text>However, there is always an id, className and style attribute available for whenever you&lsquo;d like to alter a components behaviour from the outside.</Text>

        <Br size='large' />

        <HeroDemo />

        <Br size='large' />

        <HrDemo />

        <Br size='large' />

        <ContainerDemo />   

        <Br size='medium' />     

        <GridDemo />

        <Br size="large" />

        <TypographyDemo />        
        
        <Br size="large" />

        <BadgeDmeo />

        <Br size="large" />

      </Row>
        
      <Row>
        <PixelIconDemo />
      </Row>

      <Row>
        <PixelatedImages />
      </Row>

      <Br size="large" />

      <ButtonDemo />

      <IconButtonDemo />

      <Br size="large" />

      <Row>

        <Col type='1-of-2'>
          <RadioDemo />
        </Col>

        <Col type='1-of-2'>
          <CheckboxDemo />
        </Col>

      </Row>

      <Br size="large" />

      <Row>
       
        <InputDemo />

        <Br size="large" />

        <TextAreaDemo />

        <Br size="large" />

        <ToastDemo />

        <Br size="large" />

        <SelectDemo />

        <Br size="large" />

        <ListDemo />

        <Br size="large" />
        
        <TableDemo />

        <Br size="large" />

        <ProgressDemo />

        <Br size='large' />

        <PixelBorderDemo />

        <Br size='large' />

        <ToolbarDemo />

        <Br size='large' />

        <MenuDemo />

        <Br size='large' />

        <ModalDemo />

        <Br size='large' />

      </Row>
    </main>
  );
};

export default Home;

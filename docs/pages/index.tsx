import { useCallback, useEffect, useState } from 'react';
import { rememberDarkModeUserSetting, setDarkModeActivation, Text, IconButton, PixelIcon, Row, Br, Heading, List, Hr, Col, Toolbar, Spacer, A, Toast } from '../dist';
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
import { SourceCodeButton } from '../components/SourceCodeButton';

const Home = (): JSX.Element => {

  const [darkMode, setDarkMode] = useState(!!window.matchMedia("(prefers-color-scheme: dark)"));

  useEffect(() => {
    const userDarkModeSetting = rememberDarkModeUserSetting();
    setDarkMode(userDarkModeSetting);
    setDarkModeActivation(userDarkModeSetting);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode);
    setDarkModeActivation(!darkMode);
  }, [darkMode]);

  // TODO: demo canvas pixelized rendering
  return (
    <main className={styles.main}>

    
      <Toolbar borderless className={styles.headerToolbar}>
        <Spacer />
        <PixelIcon inverted={false} name={"pixelicon-nes-ui-logo"} size='medium' style={{ marginRight: 8 }} />
        <Heading>nes-ui-react</Heading>
        <Spacer />
      </Toolbar>
      
      <IconButton borderInverted size="small" color="primary" className={styles.scrollToTop} onClick={() => window.scrollTo(0, 0)}>
        <PixelIcon size='small' name='pixelicon-arrow-up' />
      </IconButton>
      
      <Row style={{ marginTop: '2em' }}>
        
        <Br size='large'/>

          <IconButton style={{ float: 'right', marginTop: -8, marginRight: -12 }} onClick={toggleDarkMode} color="warning">
            <PixelIcon name={darkMode ? "pixelicon-sun" : 'pixelicon-moon'} inverted={false} size='medium' />
          </IconButton>

        <Text>
          nes-ui-react is the most comprehensive retro UI library for React JS. 
          It is based on <A href="https://nostalgic-css.github.io/NES.css/" target={"_blank"}>NES.css</A>,
          but refactored and bug-fixed.
        </Text>


        <Toast className={styles.forkOnGithub} onClick={() => window.open('https://github.com/kyr0/nes-ui-react', '_blank')}>
          <Text color="white">
            Fork me <br />on GitHub!
          </Text>
          <div className={styles.octocatIcon} />
        </Toast>

        <Text>Features:</Text>
        <List size="small" styleType='circle'>
          <li>Forked from NES.css, fully refactored</li>
          <li>Modern Sass and TypeScript</li>
          <li>Dark and light mode</li>
          <li>NTSC color palette</li>
          <li>Simple grid layout (2, 3 and 4 columns)</li>
          <li>New styles and custom decoration</li>
          <li>Many new components!</li>
          <li>MIT licensed</li>
        </List>
        <Br />

        <Text>If you'd like to see more features added or bug fixed, please consider becoming a contributor. You're welcome! :)</Text>

        <Heading size='medium' centered>Installation</Heading>

        <Text>Simply run:</Text>
        <Text color='primary'>&nbsp;&nbsp;yarn add nes-ui-react</Text>
        <Text color='white'>or:</Text>
        <Text color='success'>&nbsp;&nbsp;npm install nes-ui-react</Text>

        <Br />
        <A transparent href="https://www.npmjs.com/package/nes-ui-react" target={"_blank"}>
          <img alt="npm" src="https://img.shields.io/npm/v/nes-ui-react?style=for-the-badge" />
        </A>

        <Heading size='medium' centered>Usage</Heading>

        <iframe src={`https://codesandbox.io/embed/nes-ui-react-usage-r5yudo?autoresize=1&fontsize=14&theme=${darkMode ? 'dark' : 'light'}`}
          style={{ border: 0, width: '100%', height: 400 }}
          title="Usage (forked)"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>

        <Br />

        <Text>Just click on the following buttons to find the exact demo code:</Text>
         <SourceCodeButton style={{ position: 'relative' }} path="/docs/pages/index.tsx#L124"/>

        <Br size='large' />

        <A name="color-palette-demo" />
        <ColorPaletteDemo />

        <Br size='large' />

        <Heading size='xlarge' centered>Components</Heading>

        <Text>The library consists of typical, anachronistic and futuristic NES-style UI components. Every component comes with limited functionality that helps limiting the risk to introduce too much modern flavor.</Text>
        <Text>However, there is always an id, className and style attribute available for whenever you&lsquo;d like to alter a components behaviour from the outside.</Text>

        <Br size='large' />

        <A name="hero-demo" />
        <HeroDemo />

        <Br size='large' />

        <A name="hr-demo" />
        <HrDemo />

        <Br size='large' />

        <A name="container-demo" />
        <ContainerDemo />   

        <Br size='medium' />     

        <A name="grid-demo" />
        <GridDemo />

        <Br size="large" />

        <A name="typography-demo" />
        <TypographyDemo />        
        
        <Br size="large" />

        <A name="badge-demo" />
        <BadgeDmeo />

        <Br size="large" />

      </Row>
        
      <Row>
        <A name="pixelicon-demo" />
        <PixelIconDemo />
      </Row>

      <Row>
        <A name="pixelated-images-demo" />
        <PixelatedImages />
      </Row>

      <Br size="large" />

      <A name="button-demo" />
      <ButtonDemo />

      <A name="iconbutton-demo" />
      <IconButtonDemo />

      <Br size="large" />

      <Row>

        <Col type='1-of-2'>
          <A name="radio-demo" />
          <RadioDemo />
        </Col>

        <Col type='1-of-2'>
          <A name="checkbox-demo" />
          <CheckboxDemo />
        </Col>

      </Row>

      <Br size="large" />

      <Row>
       
        <A name="input-demo" />
        <InputDemo />

        <Br size="large" />

        <A name="textarea-demo" />
        <TextAreaDemo />

        <Br size="large" />

        <A name="toast-demo" />
        <ToastDemo />

        <Br size="large" />

        <A name="select-demo" />
        <SelectDemo />

        <Br size="large" />

        <A name="list-demo" />
        <ListDemo />

        <Br size="large" />
        
        <A name="table-demo" />
        <TableDemo />

        <Br size="large" />

        <A name="progress-demo" />
        <ProgressDemo />

        <Br size='large' />

        <A name="pixelborder-demo" />
        <PixelBorderDemo />

        <Br size='large' />

        <A name="toolbar-demo" />
        <ToolbarDemo />

        <Br size='large' />

        <A name="menu-demo" />
        <MenuDemo />

        <Br size='large' />

        <A name="modal-demo" />
        <ModalDemo />

        <Br size='large' />

      </Row>
    </main>
  );
};

export default Home;

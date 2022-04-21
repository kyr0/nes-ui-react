import { Text, IconButton, PixelIcon, Row, Br, Heading, List, Hr, Col } from '../dist';

// @ts-ignore
import styles from '../styles/Index.module.css';
import { BadgeDmeo } from './components/BadgeDemo';
import { ButtonDemo } from './components/ButtonDemo';
import { CheckboxDemo } from './components/CheckboxDemo';
import { ColorPaletteDemo } from './components/ColorPaletteDemo';
import { ContainerDemo } from './components/ContainerDemo';
import { GridDemo } from './components/GridDemo';
import { HeroDemo } from './components/HeroDemo';
import { HrDemo } from './components/HrDemo';
import { IconButtonDemo } from './components/IconButtonDemo';
import { InputDemo } from './components/InputDemo';
import { ListDemo } from './components/ListDemo';
import { MenuDemo } from './components/MenuDemo';
import { ModalDemo } from './components/ModalDemo';
import { PixelatedImages } from './components/PixelatedImages';
import { PixelBorderDemo } from './components/PixelBorderDemo';
import { PixelIconDemo } from './components/PixelIconDemo';
import { ProgressDemo } from './components/ProgressDemo';
import { RadioDemo } from './components/RadioDemo';
import { SelectDemo } from './components/SelectDemo';
import { TableDemo } from './components/TableDemo';
import { TextAreaDemo } from './components/TextAreaDemo';
import { ToastDemo } from './components/ToastDemo';
import { ToolbarDemo } from './components/ToolbarDemo';
import { TypographyDemo } from './components/TypographyDemo';

const Home = (): JSX.Element => {

  return (
    <>

      <IconButton size="small" color="primary" inverted 
        style={{ zIndex: 9998, position: 'fixed', bottom: 20, right: 20 }} 
        onClick={() => {window.scrollTo(0, 0)}}>
        <PixelIcon size='small' name='pixelicon-arrow-up-16' />
      </IconButton>
      
      <Row style={{ marginTop: '2em' }}>
        
        <Br />

        <Heading size='xlarge' centered>kyr0/nes-ui-react</Heading>

        <Br size='medium'/>

        <Text>Welcome back to 1986! This is NES UI for React, the most comprehensive anachronistic, retro UI component library for React JS.</Text>

        <Text>This design system paints the web in 8 bits. Altough the framework can handle light mode, the dask mode feels definitely more like back in the days.</Text>

        <Text>The library works great for games, websites and retro-apps (like ).</Text>

        <Text>This is a fun project! We welcome every contributor :)</Text>

        <Br />
        
        <Text>Features:</Text>
        <List size="small" styleType='circle'>
          <li>Automatic dark and light mode</li>
          <li>Only scalable techniques used (CSS border-shadow, SVG, SCSS bitsets)</li>
          <li>Simple grid layout (2, 3 and 4 columns supported)</li>
          <li>Pixel borders, component-independent as helper CSS class</li>
          <li>Permissively licensed</li>
          <li>Based on original NES.css. Now in B3RS3RK3R mode!</li>
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
    </>
  );
};

export default Home;

import { useState } from 'react';
import { ColorPaletteNames, Colors, Text, IconButton, PixelIcon, Row, Br, Heading, List, Hr, BlockText, Hero, Container, Col, Badge, BadgeSplitted, A, Button, Radio, Checkbox, Input, TextArea, Toast, Select, Table, Progress, Toolbar, Separator, Spacer, Menu, Modal, Header, ModalContent, Footer } from '../dist';
import useInterval from '../hook/useInterval';

// @ts-ignore
import styles from '../styles/Index.module.css';


const Home = (): JSX.Element => {

  const [demoDialogOpen, setDemoDialogOpen] = useState(false)
  const [showMoreMenu, setShowMoreMenu] = useState(false)
  const [exmapleProgressPct, setExampleProgressPct] = useState(20)

  useInterval(
    () => {
      // Your custom logic here
      setExampleProgressPct(exmapleProgressPct + 20 <= 100 ? exmapleProgressPct + 20 : 0)
    },
    // Delay in milliseconds or null to stop it
    1000
  )

  const onPlayClick = () => {
    console.log('Click to play')
  }

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
        <List styleType='circle'>
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

        <Heading size='xlarge' centered>Color Palette</Heading>

        <Text>Any NES UI had a distinct color palette that you&lsquo;ll find resembled here.</Text>
        <Text>For the sake of simplicity, the colors are named intrinsically, like: primary, success, warning, error, disabled, dark, black, white.</Text>

        <Text>On top of that, the whole NES color palette is exported for programmatic use:</Text>

        {ColorPaletteNames.map((name) => <BlockText className="pixel-border" shadow shadowInverted key={name} backgroundColor={(Colors as any)[name]} style={{ marginRight: '1.4em', padding: 8 }}>{name}</BlockText>)}
      
        <Br size='large' />

        <Heading size='xlarge' centered>Components</Heading>

        <Text>The library consists of typical, anachronistic and futuristic NES-style UI components. Every component comes with limited functionality that helps limiting the risk to introduce too much modern flavor.</Text>
        <Text>However, there is always an id, className and style attribute available for whenever you&lsquo;d like to alter a components behaviour from the outside.</Text>

        <Br size='large' />


        <Heading size='large' centered>&lt;Hero variant=&quot;dash&quot;&gt;</Heading>

        <Text>A hero component is used to show most important content. The decoration can be set using the variant attribute.</Text>
        
        <Br size='large' />

        <Hero variant='dash'>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/nJH00XW5w-8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Hero>

        <Br size='large' />

        <Heading size='large' centered>&lt;Hr color=&quot;success&quot; height=&quot;4&quot;&gt;</Heading>

        <Text color="disabled">Horizontal rulers are used to divide the UI horizontally. They can be configured to have different color and height in pixel.</Text>

        <Hr color="primary" height={1} />
        <Hr color="success" height={2} />
        <Hr />

        <Br size='large' />

        <Heading size='large' centered>&lt;Container&gt; &amp; Content Alignment</Heading>

        <Container align='center' title='&lt;Container align=&quot;center&quot;&gt;'>title + content center algined because of align=&quot;center&quot;</Container>

        <Br />

        <Container align='right' title='&lt;Container align="right"&gt;'>title + content aligned right</Container>

        <Br />

        <Container align='left' title='&lt;Container roundedCorners alignTitle="center"&gt;' roundedCorners alignTitle="center">
          rounded corners, title aligned center, but content aligned left (default)
        </Container>

        <Br size="large" />

        <Heading size='large' centered>Grid layouts with &lt;Row&gt; and &lt;Col&gt;</Heading>

        <Row>
          <Col type='1-of-2'>
            <Container style={{ backgroundColor: 'gray' }} roundedCorners>
              &lt;Col type=&quot;1-of-2&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
          <Col type='1-of-2'>
            <Container style={{ backgroundColor: 'gray' }} roundedCorners>
              &lt;Col type=&quot;1-of-2&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
        </Row>

        <Row>
          <Col type='1-of-3'>
            <Container style={{ backgroundColor: 'gray' }} roundedCorners>
              &lt;Col type=&quot;1-of-3&quot;&gt;
            </Container>
          </Col>
          <Col type='2-of-3'>
            <Container style={{ backgroundColor: 'gray' }} roundedCorners>
              &lt;Col type=&quot;2-of-3&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
        </Row>

        <Row>
          <Col type='1-of-4'>
            <Container style={{ backgroundColor: 'gray' }} roundedCorners>
              &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
          <Col type='1-of-4'>
            <Container style={{ backgroundColor: 'gray' }} roundedCorners>
              &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
          <Col type='1-of-4'>
            <Container style={{ backgroundColor: 'gray' }} roundedCorners>
              &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
          <Col type='1-of-4'>
            <Container style={{ backgroundColor: 'gray' }} roundedCorners>
              &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
        </Row>

        <Br size="large" />

        <Heading size='large' centered>&lt;Text&gt; and &lt;Heading&gt;</Heading>

        <Container title='&lt;Text&gt;' alignTitle="center">
          <Text>Typography is simple: There is text or headings. Every paragraph becomes a &lt;Text&gt;. A text can be centered, have a color and a size.</Text>
       
          <Row>
            <Col type='1-of-2'>
              <Text size='small'>size=&quot;small&quot;</Text>
              <Text size="medium">size=&quot;medium&quot;</Text>
              <Text size='large'>size=&quot;large&quot;</Text>
              <Text size='xlarge'>size=&quot;xlarge&quot;</Text>
            </Col>

            <Col type='1-of-2'>
              <Text color="primary">color=&quot;primary&quot;</Text>
              <Text color="success">color=&quot;success&quot;</Text>
              <Text color="warning">color=&quot;warning&quot;</Text>
              <Text color="error">color=&quot;error&quot;</Text>
              <Text color="disabled">color=&quot;disabled&quot;</Text>
            </Col>
          </Row>
        </Container>

        <Br size="medium" />

        <Container title='&lt;Heading&gt;' alignTitle="center">
          <Text>&lt;Heading&gt; however behaves exactly like a text, but is 25% bigger and size=&quot;xlarge&quot; is underlined. 
            Headings also have spacing that can be controlled with the attributes: dense, topBr, bottomBr.</Text>

          <Row>
            <Col type='1-of-2'>
              <Heading dense size='small'>size=&quot;small&quot;</Heading>
              <Heading dense size="medium">size=&quot;medium&quot;</Heading>
              <Heading dense size='large'>size=&quot;large&quot;</Heading>
              <Heading dense size='xlarge'>size=&quot;xlarge&quot;</Heading>
            </Col>

            <Col type='1-of-2'>
              <Heading dense color="primary">color=&quot;primary&quot;</Heading>
              <Heading dense color="success">color=&quot;success&quot;</Heading>
              <Heading dense color="warning">color=&quot;warning&quot;</Heading>
              <Heading dense color="error">color=&quot;error&quot;</Heading>
              <Heading dense color="disabled">color=&quot;disabled&quot;</Heading>
            </Col>
          </Row>
        </Container>


        <Br size="large" />

        <Container title='&lt;Badge&gt;'>
          <Text>Badges indicate a status, or can represent hash tags, categories etc. The fontColor and bgColor attributes control the colors:</Text>
          <Badge backgroundColor="primary" text="Primary" color='#fff' />
          <Badge backgroundColor="error" text="Error" color='#fff' />
          <Badge backgroundColor="warning" text="Warning" />
          <Badge backgroundColor="success" text="Success"  />
        </Container>

        <Container title='&lt;BadgeSplitted&gt;'>
          <Text>Sometimes, a tuple of status information shall be displayed. Here, a splitted badge comes in handy. bgColorLeft and textLeft control the left-hand design:</Text>
          <BadgeSplitted textLeft='100%' backgroundColor="primary" text="OK" />
          <BadgeSplitted textLeft='!!' backgroundColor="error" text="Oh!"  />
          <BadgeSplitted textLeft='??' backgroundColor="warning" text="Ha?" />
          <BadgeSplitted textLeft=':)' backgroundColor="success" text="Yay!" />
        </Container>

      </Row>

      <Br size="large" />
        
      <Row>
        <Col type='1-of-2'>
          <Container title='&lt;PixelIcon&gt;'>
            <Row>
              <PixelIcon name={styles.pixeliconAron} size='large' style={{ marginRight: 5 }} />
              <PixelIcon name='pixelicon-checkmark-24' size="medium" style={{ marginRight: 5 }} />
              <PixelIcon name={styles.pixeliconMeowAnimated} size='small' style={{ marginRight: 5 }} />
            </Row>

            <Text>Sizes: <br />
              &nbsp;&nbsp;small: 16px<br />
              &nbsp;&nbsp;medium: 24px<br />
              &nbsp;&nbsp;large: 32px
            </Text>
            <Text>Pixel width + height: 1px</Text>
            <Text color="disabled">
              &gt; Create your own PixelIcons with&nbsp;
              <A href="https://www.pixelartcss.com/" target={"_blank"}>PixelArtCSS</A>
            </Text>
          </Container>
        </Col>

        <Col type='1-of-2'>
          <Container title='Pixelated Images'>
            <img alt="pixelated cursor icon" src="/assets/cursor.png" width={100} height={100} />

            <Heading dense>Scaling (2x) with: .scale-2x</Heading>

            <div style={{ display: 'block', height: 52 }}>
              <div className="scale-2x" style={{ display: 'flex', flexDirection: 'row', }}>
                <PixelIcon name={styles.pixeliconMeowAnimated} size='small' style={{ marginRight: 5 }} />
              </div>
            </div>
          </Container>
        </Col>
      </Row>

      <Br size="large" />

      <Row>

        <Container title='&lt;Button&gt;'>
          <Text>Buttons can be created in different colors and sizes:</Text>
          <Button onClick={onPlayClick}>Primary</Button>
          <Button color="success" onClick={onPlayClick} style={{ color: '#000' }}>Success</Button>
          <Button color="primary" onClick={onPlayClick}>Primary</Button>
          <Button color="warning" onClick={onPlayClick}>Warning</Button>
          <Button color="error" onClick={onPlayClick}>Error</Button>
          <Button disabled onClick={onPlayClick}>Disabled</Button>

          <Br size="small" />

          <Text>Small buttons:</Text>

          <Button size="small" onClick={onPlayClick}>Primary</Button>
          <Button size="small" color="success" onClick={onPlayClick} style={{ color: '#000' }}>Success</Button>
          <Button size="small" color="primary" onClick={onPlayClick}>Primary</Button>
          <Button size="small" color="warning" onClick={onPlayClick}>Warning</Button>
          <Button size="small" color="error" onClick={onPlayClick}>Error</Button>
          <Button size="small" disabled onClick={onPlayClick}>Disabled</Button>
        </Container>

      </Row>

      <Row>

        <Container title='&lt;IconButton&gt;'>

          <Text>Buttons that only consist of icons are used in Toolbars and Menus. For a perfect shape, the PixelIcon size needs to match the desired button size (32px, 24px or 16px):</Text>

          <div style={{display: 'flex'}}>
            <IconButton color="success" size="large" onClick={onPlayClick}>
              <PixelIcon name="pixelicon-checkmark-32" size='large' />
            </IconButton>

            <IconButton color="primary" size="medium" onClick={onPlayClick}>
              <PixelIcon name="pixelicon-checkmark-24" size='medium' />
            </IconButton>

            <IconButton color="error" size="small" onClick={onPlayClick}>
              <PixelIcon name="pixelicon-close-8" size='small' />
            </IconButton>
          </div>

          <Br size="small" />

          <Text>Such icon buttons can also be composed of icons and text:</Text>

          <div style={{display: 'flex'}}>

            <IconButton color="success">
              <Text size='small'>OK</Text>
              <PixelIcon name="pixelicon-checkmark-16" size='small' />
            </IconButton>

            <IconButton color="error">
              <PixelIcon name="pixelicon-close-8" size='small' />
              <Text size='small'>Cancel</Text>
            </IconButton>
          </div>
        </Container>

      </Row>

      <Br size="large" />

      <Row>

        <Col type='1-of-2'>

          <Container title='&lt;Radio&gt;'>
            <Radio name="foo" value="yes" label="Yes" checked />
            <Radio name="foo" value="no" label="No" />

            <Br />
            <Text size="small" color="disabled">Can be disabled too:</Text>
            <Radio name="foo1" value="yes" label="Disabled" checked disabled />
          </Container>
        </Col>

        <Col type='1-of-2'>

          <Container title='&lt;Checkbox&gt;'>
            <Checkbox name="bar" value="yes" label="Yes" checked />
            <Checkbox name="bar" value="no" label="No" />
            <Br />
            <Text size="small" color="disabled">Can be disabled too:</Text>
            <Checkbox name="bar1" value="yes" label="Disabled" checked disabled /> 
          </Container>
        </Col>

      </Row>

      <Br size="medium" />

      <Row>
        <Container title='&lt;Input color="error"&gt;' alignTitle='center'>
          <form>
            <Row>

              <Col type='1-of-2'>
                <Input type="text" autoComplete="first-name" name="firstName" value="Aron" label="First name:" />
                <Text>&nbsp;</Text>
                <Input type="password" autoComplete="current-password" color='warning' name="password" value="123" label="Password:" />
                <Text size="small" color="warning">Weak password!</Text>
              </Col>

              <Col type='1-of-2'>
                <Input type="text" autoComplete="current-email" color='error' name="email" value="info@aron-homberg.de" label="E-Mail:" />
                <Text size="small" color="error">This email already exists!</Text>

                <Input type="text" color='success' name="status" value="SUCCESS" label="Status:" disabled />
                <Text size="small" color="success">User created successfully.</Text>
              </Col>
            </Row>

            <Row>
              <Input style={{ width: 120 }} type="number" autoComplete="current-freq" color='primary' name="freq" value="440" label="Frequency (Hz):" />
            </Row>

          </form>
        </Container>

        <Br size="medium" />

        <Container title='&lt;TextArea color="success" rows="3"&gt;' alignTitle="center">
          <TextArea rows={5} name="textarea" value={`L0r3m 1p5um d0l0r s1t 4m37,\r\n
c0ns3c737ur 4d1p15c1ng 3l1t3 31337!`} />

          <Row>
            <Col type='1-of-3'>
              <TextArea rows={3} name="textarea" color='success' value={`MISSION ACCOMPLISHED!\nALL YOUR BASE BELONG TO US!`} disabled />
            </Col>

            <Col type='1-of-3'>
              <TextArea rows={3} name="textarea" color='warning' value={`MISSION ACCOMPLISHED!\nALL YOUR BASE BELONG TO US!`} disabled />
            </Col>

            <Col type='1-of-3'>
              <TextArea rows={3} name="textarea" color='error' value={`MISSION ACCOMPLISHED!\nALL YOUR BASE BELONG TO US!`} disabled />
            </Col>
          </Row>
        </Container>

        <Br size="large" />

        <Container title='&lt;Toast bubblePostion="right"&gt;' alignTitle="center">
          <Toast>
              <PixelIcon name={styles.pixeliconAron} size='large' style={{ marginRight: 20 }} />
              <Text>Toasts can be used to inform the user about context information. They are great for tutorials and story-telling.</Text>
          </Toast>

          <Toast id="foo" style={{ float: 'right' }} bubblePostion='right' cursor='pointer'>
            <Text size="small" color='white'>
                Okay, I guess I got it... Meow!<br />And where&lsquo;s my mouse?
            </Text>
            <PixelIcon name={styles.pixeliconMeowAnimated} size='small' style={{ marginLeft: 10 }} />
          </Toast>
        </Container>

        <Br size="large" />

        <Container title='&lt;Select&gt;' alignTitle="center">
          <Row>
            <Col type='1-of-3'>
              <Select id="difficulty" value="VETERAN" label="Difficulty:">
                <option value="" disabled hidden>Select...</option>
                <option value="EASY">EASY</option>
                <option value="VETERAN">VETERAN</option>
                <option value="HARDCORE">HARDCORE</option>
              </Select>
            </Col>

            <Col type='1-of-3'>
              <Select id="difficulty_warning" value="VETERAN" color='warning' label="Difficulty+:">
                <option value="" disabled hidden>Select...</option>
                <option value="EASY">EASY+</option>
                <option value="VETERAN">VETERAN+</option>
                <option value="HARDCORE">HARDCORE+</option>
              </Select>
            </Col>

            <Col type='1-of-3'>
              <Select id="difficulty_warning" value="VETERAN" color='error' label="Difficulty++:">
                <option value="" disabled hidden>Select...</option>
                <option value="EASY">EASY++</option>
                <option value="VETERAN">VETERAN++</option>
                <option value="HARDCORE">HARDCORE++</option>
              </Select>
            </Col>
          </Row>

          <Row>
            <Col type='1-of-2'>
              <Select id="success" value={["EASY", "VETERAN"]} disabled color='success' multiple label="Mastered:">
                <option value="" disabled hidden>Select...</option>
                <option value="EASY">EASY</option>
                <option value="VETERAN">VETERAN</option>
                <option value="HARDCORE">HARDCORE</option>
                <option value="ELDEN_RING">ELDEN RING</option>
              </Select>
            </Col>

            <Col type='1-of-2'>
              <Select id="success" value={["EASY"]} color='warning' singleSelect multiple label="Select as menu:">
                <option value="" disabled hidden>Select...</option>
                <option value="EASY">EASY</option>
                <option value="VETERAN">VETERAN</option>
                <option value="HARDCORE">HARDCORE</option>
                <option value="ELDEN_RING">ELDEN RING</option>
              </Select>
            </Col>
          </Row>
        </Container>

        <Br size="large" />

        <Container title="&lt;List styleType=&quot;disc&quot;&gt;" alignTitle="center">
          <Row>
            <Col type='1-of-2'>
              <Heading dense>Circle list:</Heading>
              <List styleType='circle'>
                <li>Wake up</li>
                <li>Skip school</li>
                <li>Turn on the C64</li>
                <li>Sleep</li>
              </List>
            </Col>
            <Col type='1-of-2'>
              <Heading dense>Disc list:</Heading>
              <List styleType='disc'>
                <li>Wake up</li>
                <li>Skip school</li>
                <li>Turn on the C64</li>
                <li>Sleep</li>
              </List>
            </Col>
          </Row>
        </Container>

        <Br size="large" />

        <Container title="&lt;Table&gt;" alignTitle="center">
          <Row>
            <Col type='1-of-2'>
              <Heading topSpacing={false} bottomSpacing={false}>Left-aligned, borderless:</Heading>
              <Table>
                <thead>
                  <tr>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Funny</td>
                    <td>Games</td>
                    <td>Are made</td>
                    <td>of 8 bits</td>
                  </tr>
                  <tr>
                    <td>Good</td>
                    <td>Players</td>
                    <td>dream in</td>
                    <td>8 bit</td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            <Col type='1-of-2'>
              <Heading topSpacing={false} bottomSpacing={false}>Centered, with borders:</Heading>
              <Table bordered centered>
                <thead>
                  <tr>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Funny</td>
                    <td>Games</td>
                    <td>Are made</td>
                    <td>of 8 bits</td>
                  </tr>
                  <tr>
                    <td>Good</td>
                    <td>Players</td>
                    <td>dream in</td>
                    <td>8 bit</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>

        <Br size="large" />

        <Container title='&lt;Progress value="20" max="100" color="success" /&gt;' alignTitle="center">
          <Progress value="90" max="100" />
          <Progress value={exmapleProgressPct} max="100" color='primary' />
          <Progress value="30" max="100" color='success' />
          <Progress value="10" max="100" color='warning' />
          <Progress value="50" max="100" color='error' />
          <Progress value="50" max="100" color='pattern' />
        </Container>

        <Br size='large' />

        <Heading centered>CSS helper class: .pixel-border</Heading>

        <Row>
          <Col className="pixel-border" type="1-of-4">
            <Text size='small' centered>
              <br />
              .pixel-border
            </Text>
          </Col>
          <Col className="pixel-border-2" type="1-of-4">
            <Text size='small' centered>
              <br />
              .pixel-border-2
            </Text>
          </Col>
          <Col className="pixel-border-2x" type="1-of-4">
            <Text size='small' centered>
              <br />
              .pixel-border-2x
            </Text>
          </Col>
          <Col className="pixel-border-2x-2" type="1-of-4">
            <Text size='small' centered>
              <br />
              .pixel-border-2x-2
            </Text>
          </Col>
        </Row>

        <Br size='large' />

        <Row>
          <Heading size='large' centered>&lt;Toolbar&gt;</Heading>

          <Text>
            Toolbars are used to group buttons together. They can be used to create a navigation bar, an action toolbar, or in combination with &lt;Header&gt; or &lt;Footer&gt;:
          </Text>

          <Br size='small' />

          <Toolbar>
            
            <IconButton color="success" size="small" onClick={onPlayClick}>
              <PixelIcon name="pixelicon-checkmark-16" size='small' />
            </IconButton>

            <Separator />

            <Spacer />
            
            <Text>small &lt;IconButton&gt;&rsquo;s, &lt;Spacer&gt;&rsquo;s and a &lt;Separator&gt;</Text>

            <Spacer />

            <IconButton color="error" size="small" onClick={onPlayClick}>
              <PixelIcon name="pixelicon-close-8" size='small' />
            </IconButton>

          </Toolbar>

          <Br size='small' />

          <Heading size="medium" centered>Borderless &amp; with edged corners</Heading>

          <Toolbar borderless roundedCorners={false}>
            
            <IconButton color="success" size="small" onClick={onPlayClick}>
              <PixelIcon name="pixelicon-checkmark-16" size='small' />
            </IconButton>

            <Separator />

            <Spacer />
            
            <Text>small &lt;IconButton&gt;&rsquo;s, &lt;Spacer&gt;&rsquo;s and a &lt;Separator&gt;</Text>

            <Spacer />

            <IconButton color="error" size="small" onClick={onPlayClick}>
              <PixelIcon name="pixelicon-close-8" size='small' />
            </IconButton>

          </Toolbar>
        </Row>

        <Br size='large' />

        <Row>
          <Heading size='large' centered>&lt;Menu&gt;</Heading>

          <Text>
            Menus are a great UI choice whenever a single button is not enough. They can be used to create a dropdown menu or a context menu.
          </Text>

          <Br size='small' />

          <Menu>
            
            <IconButton color="success" size="small" onClick={onPlayClick}>
              <PixelIcon name="pixelicon-checkmark-16" size='small' />
              <Text size='small'>Accept</Text>
            </IconButton>

            <Separator horizontal />

            <IconButton color="error" size="small" onClick={onPlayClick}>
              <PixelIcon name="pixelicon-close-8" size='small' />
              <Text size='small'>Decline</Text>
            </IconButton>

          </Menu>

          <Br size='small' />

          <Heading size="medium" centered>Dropdown menu</Heading>

          <Button onClick={() => setShowMoreMenu(true)}>More...</Button>

          <Menu open={showMoreMenu} modal onClose={() => setShowMoreMenu(false)}>
            
            <IconButton color="success" size="small" onClick={onPlayClick}>
              <PixelIcon name="pixelicon-checkmark-16" size='small' />
              <Text size='small'>Accept</Text>
            </IconButton>

            <IconButton color="primary" size="small" onClick={onPlayClick}>
              <PixelIcon name="pixelicon-checkmark-16" size='small' />
              <Text size='small'>Accept</Text>
            </IconButton>

            <Separator horizontal />

            <IconButton color="error" size="small" onClick={onPlayClick}>
              <PixelIcon name="pixelicon-close-8" size='small' />
              <Text size='small'>Decline</Text>
            </IconButton>

          </Menu>

        </Row>

        <Br size='large' />

        <Row>
          <Heading size='large' centered>&lt;Modal&gt;&rsquo;s</Heading>

          <Text>
            Modals allow for opening custom dialogs and prompts as an overlay. 
            They are typically used together with &lt;ModalContent&gt;, &lt;Header&gt; and &lt;Footer&gt;. 
          </Text>

          <Text>
            The properties open and onClose are relevant for controlling the presentation state.
            With backdrop and backdropClose, the background of the modal can be disabled and the modal can be closed by clicking on it.
          </Text>

          <Br size='small' />

          <IconButton color="primary" onClick={() => setDemoDialogOpen(true)}>
            <Text size='small'>Open Modal</Text>
            <PixelIcon name="pixelicon-checkmark-16" size='small' />
          </IconButton>

          <Modal open={demoDialogOpen} onClose={() => setDemoDialogOpen(false)}>
            <Header>
              <Spacer /> 
              <Heading dense>Settings</Heading>
              <Spacer /> 
              <IconButton color="error" size="small" onClick={() => setDemoDialogOpen(false)}>
                <PixelIcon name="pixelicon-close-8" size='small' />
              </IconButton>
            </Header>
            <ModalContent>This is written inside of a &lt;ModalContent&gt; component just to keep the correct distance to all sides of the modal: The &lt;Header&gt; which is above and the &lt;Footer&gt; which is holding the action buttons.</ModalContent>
            <Footer>
              <IconButton color="error" onClick={() => setDemoDialogOpen(false)}>
                <PixelIcon name="pixelicon-close-8" size='small' />
                <Text size='small'>Cancel</Text>
              </IconButton>
              <Spacer />
              <IconButton color="success" onClick={() => setDemoDialogOpen(false)}>

                <Text size='small'>Accept</Text>
              <PixelIcon name="pixelicon-checkmark-16" size='small' />
              </IconButton>
            </Footer>
          </Modal>
        </Row>

        <Br size='large' />

      </Row>
    </>
  );
};

export default Home;

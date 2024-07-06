import {
  CoreLayoutItem, BlankLayout, CoreClasses, CoreImage, CoreBox, CoreH4, CoreH5, CoreGrid, CoreContainedButton, CoreLink,
  CoreH3,
  CoreTypographyBody1,
  CoreTypographyOverline,
  CoreCard,
  CoreForm,
  FORM_EDIT_MODE
} from "@wrappid/core";
  
import adil from "../resource/adil.jpg";
import arnob from "../resource/arnob.jpg";
import cart from "../resource/cart.png";
import rajarshi from "../resource/coco.jpg";
import Section6 from "../resource/cord.png";  
import facebook from "../resource/facebook.png"; 
import Logo from "../resource/header-logo.png";
import Image from "../resource/image.png";
import instagram from "../resource/Instagram.jpeg";
import linkedin from "../resource/LinkedIn.jpeg";
import Muson from "../resource/muson.png";
import paymentLogo from "../resource/payment-logo.png";
import sanjay from "../resource/sanjay.jpg";
import Section1 from "../resource/section-2.jpg";
import Section2 from "../resource/section-3.png";
import surojit from "../resource/surojit.jpg";
import swagata from "../resource/swagata.jpg";
import twitter from "../resource/twitter.png";   
import whatsapp from "../resource/whatsapp.jpeg";
import youtube from "../resource/youtube.png";  
const Home = () =>{
  const CoreFormSampleSchema = {
    actionContainerStyle: "alignRight",
    actions             : [],
    allowCancel         : true,
    cardElevation       : false,
    fields              : [
      {
        gridSize: 12,
        id      : "email",
        label   : "Enter your Email",
        name    : "email",
        required: true,
        type    : "text",
      },
      {
        gridSize: 6,
        id      : "f_name",
        label   : "Enter your Last Name",
        name    : "f_name",
        required: true,
        type    : "text",
      },
      {
        gridSize: 6,
        id      : "l_name",
        label   : "Enter your Last Name",
        name    : "l_name",
        required: true,
        type    : "text",
      },
      {
        gridSize: 12,
        id      : "message",
        label   : "Enter your Message",
        name    : "message",
      
        required: true,
        type    : "text",
      },
      
    ],
    submitButtonLabel: "Ask Gigi",
  };
      
  return(
    <>
      
      <CoreLayoutItem id={BlankLayout.PLACEHOLDER.CONTENT} styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN]}>
          
        {/* Header Section */}
        <CoreGrid styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.BORDER.BORDER_BOTTOM, CoreClasses.BORDER.BORDER_GREY_600]}>
          {/* Id Logo */}
          <CoreBox
            gridProps={
              {
                gridSize    : { md: 4 }, 
                styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START, CoreClasses.PADDING.PL5]
              }}>
            <CoreImage
              height={"40"}
              width={"40"}
              src={Logo}
              alt="Id Image"/>
          </CoreBox>
  
          <CoreBox
            gridProps={{
              gridSize    : { md: 6 },
              styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END],
            }} >
            {/* Card Holder Name */}
            <CoreBox styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.P1]}>
              <CoreLink href="#" styleClasses={[CoreClasses.PADDING.P1, CoreClasses.PADDING.PR2]}>Products</CoreLink>
  
              <CoreLink href="#" styleClasses={[CoreClasses.PADDING.P1, CoreClasses.PADDING.PR2]}>Artists</CoreLink>
  
              <CoreLink href="#" styleClasses={[CoreClasses.PADDING.P1, CoreClasses.PADDING.PR2]}>Supports</CoreLink>
  
              <CoreLink href="#" styleClasses={[CoreClasses.PADDING.P1, CoreClasses.PADDING.PR2]}>Login</CoreLink>
  
              <CoreImage
                height={"60"}
                width={"60"}
                src={cart}
                alt="Id Image"/>
            </CoreBox>
          </CoreBox>
        </CoreGrid>
  
        {/* First Section */}
        <CoreGrid styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
  
          <CoreBox
            gridProps={{
              gridSize    : { md: 4 },
              styleClasses: [CoreClasses.ALIGNMENT.ALIGN_SELF_CENTER],
            }} >
            {/* Card Holder Name */}
            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.PADDING.P1]}>
              <CoreH5 styleClasses={[CoreClasses.PADDING.P1]}>Makers of the</CoreH5>
  
              <CoreH3>NRG Power Supplies</CoreH3>
  
              <CoreBox styleClasses={[CoreClasses.PADDING.P1, CoreClasses.PADDING.PT2]}>
                <CoreContainedButton
                  color={"warning"}
                  styleClasses={[CoreClasses.WIDTH.MAX_W_50, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
                >Explore Products</CoreContainedButton>
              </CoreBox>
  
              <CoreLink href="https://gigigadgets.com/why-nrg">Why NRG?</CoreLink>
                
            </CoreBox>
          </CoreBox>
  
          {/* Id Image */}
          <CoreBox
            gridProps={
              {
                gridSize    : { md: 5 }, 
                styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END]
              }}>
            <CoreImage
              width={"550"}
              height={"620"}
              src={Image}
              alt="Id Image"/>
          </CoreBox>
        </CoreGrid>
  
        {/* Second Section */}
        <CoreGrid styleClasses={[
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.PADDING.PT5,
          CoreClasses.PADDING.PB2,
          CoreClasses.PADDING.PR5,
          CoreClasses.BG.BG_GREY_900
        ]}>
  
          <CoreBox
            gridProps={{
              gridSize    : { md: 3 },
              styleClasses: [CoreClasses.ALIGNMENT.ALIGN_SELF_CENTER, CoreClasses.COLOR.TEXT_WHITE],
            }} >
            {/* Card Holder Name */}
            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_START, CoreClasses.PADDING.P1]}>
  
              <CoreH3 styleClasses={[CoreClasses.PADDING.PL1]}>No Worries</CoreH3>
  
              <CoreH4 styleClasses={[CoreClasses.PADDING.P1]}>about power again</CoreH4>
  
              <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.P1, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.COLOR.TEXT_WHITE]}>Multiport power supplies to power up your pedals, processors and other musical equipment</CoreTypographyBody1>
      
              <CoreBox styleClasses={[CoreClasses.PADDING.PT3]}>
                <CoreContainedButton
                  color={"warning"}
                  styleClasses={[CoreClasses.WIDTH.W_50, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
                >View all Multiport</CoreContainedButton>
              </CoreBox>
                
            </CoreBox>
          </CoreBox>
  
          {/* Id Image */}
          <CoreBox
            gridProps={
              {
                gridSize    : { md: 6 }, 
                styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]
              }}>
            <CoreImage
              width={"650"}
              height={"550"}
              src={Section1}
              alt="Id Image"/>
  
            <CoreTypographyOverline styleClasses={[CoreClasses.COLOR.TEXT_WHITE, CoreClasses.TEXT.TEXT_END]}>This is the Coal Black variant. Also available in Frost White.</CoreTypographyOverline>
          </CoreBox>
        </CoreGrid>
  
        {/* Third Section */}
        <CoreGrid styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.PT5, CoreClasses.PADDING.PB5, CoreClasses.PADDING.PR5]}>
  
          <CoreBox
            gridProps={{
              gridSize    : { md: 4 },
              styleClasses: [CoreClasses.ALIGNMENT.ALIGN_SELF_CENTER],
            }} >
            {/* Card Holder Name */}
            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_START, CoreClasses.PADDING.P1]}>
  
              <CoreH3 styleClasses={[CoreClasses.PADDING.PL1]}>Need one port</CoreH3>
  
              <CoreH4 styleClasses={[CoreClasses.PADDING.P1]}>we are there to power you</CoreH4>
  
              <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.P1, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>Single port power supplies to power up your processors, keyboards, digital pianos, drum machines and other musical equipment</CoreTypographyBody1>
      
              <CoreBox styleClasses={[CoreClasses.PADDING.PT3]}>
                <CoreContainedButton
                  color={"warning"}
                  styleClasses={[CoreClasses.WIDTH.MAX_W_50, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
                >View all Single Port</CoreContainedButton>
              </CoreBox>
  
              <CoreTypographyOverline styleClasses={[CoreClasses.PADDING.PL1, CoreClasses.PADDING.PT2]}>Available in different specifications and colors</CoreTypographyOverline>
                
            </CoreBox>
          </CoreBox>
  
          {/* Id Image */}
          <CoreBox
            gridProps={
              {
                gridSize    : { md: 6 }, 
                styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]
              }}>
            <CoreImage
              width={"600"}
              height={"450"}
              src={Section2}
              alt="Id Image"/>
          </CoreBox>
        </CoreGrid>

        {/*youtube */ }
        <CoreGrid styleClasses={[CoreClasses.BG.BG_GREY_300]}>
          <CoreBox
            gridProps={{
              gridSize    : { md: 6 },
              styleClasses: [CoreClasses.ALIGNMENT.ALIGN_SELF_CENTER],
            }} >
            
            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_START, CoreClasses.PADDING.P1, CoreClasses.PADDING.PL5]}>
                  
              <CoreH5 styleClasses={[CoreClasses.PADDING.P1]}>We are different</CoreH5>
  
              <CoreH4 styleClasses={[CoreClasses.PADDING.PL1]}>we are India safest</CoreH4>
  
              <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.P1, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>With best in class range of protections NRG is one of the safest power supplies available in India. Each NRG unit provides multiple input and output protections.</CoreTypographyBody1>
      
              <CoreBox styleClasses={[CoreClasses.PADDING.PT3]}>
                <CoreContainedButton
                  color={"warning"}
                  styleClasses={[CoreClasses.WIDTH.W_50, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
                >Learn More</CoreContainedButton>
              </CoreBox>
                
            </CoreBox>
          </CoreBox>

          <CoreBox
            gridProps={
              {
                gridSize    : { md: 5 }, 
                styleClasses: [CoreClasses.MARGIN.MX5]
              }}>
            <iframe
              width="520"
              height="300"
              src="https://www.youtube.com/embed/Avhbp22Qr3o?si=rf-EGAHUp62HlPVf"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
          </CoreBox>
       
        </CoreGrid>

        {/* Image  Section */}
        <CoreBox styleClasses={[CoreClasses.BG.BG_GREY_900]}>
          <CoreBox styleClasses={[CoreClasses.MARGIN.M4]}>
            <CoreBox
              gridProps={{
                gridSize    : { md: 4 },
                styleClasses: [CoreClasses.ALIGNMENT.ALIGN_SELF_CENTER, CoreClasses.PADDING.PR5, CoreClasses.BG.BG_GREY_900],
              }} >
              {/* Card Holder Name */}
              <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_START, CoreClasses.PADDING.P1]}>

                <CoreH5 styleClasses={[CoreClasses.PADDING.PL1, CoreClasses.COLOR.TEXT_WHITE]}>who all uses NRG</CoreH5>

                <CoreH3 styleClasses={[CoreClasses.PADDING.P1, CoreClasses.COLOR.TEXT_WHITE]}>NRGetic Heroes</CoreH3>

                <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.P1, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.COLOR.TEXT_WHITE]}>We’re proud of our commitment towards renowned Artists. We also believe in supporting and sponsoring new talents.</CoreTypographyBody1>

                <CoreTypographyOverline><CoreLink styleClasses={[CoreClasses.PADDING.PL3, CoreClasses.COLOR.TEXT_PRIMARY_DARK]}>See all Artists</CoreLink>
            |

                  <CoreLink styleClasses={[CoreClasses.PADDING.PL3, CoreClasses.COLOR.TEXT_PRIMARY_DARK]}>Join the Gang</CoreLink></CoreTypographyOverline>

                <CoreGrid styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>

                  {/* Id Image 1 */}
                  <CoreBox
                    gridProps={
                      {
                        gridSize    : { md: 2 }, 
                        styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]
                      }}>
                    <CoreImage
                      width={"150"}
                      height={"150"}
                      src={adil}
                      alt="Id Image"/>

                    <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.COLOR.TEXT_WHITE]}>Adil Rashid</CoreTypographyBody1>
                  </CoreBox>

                  {/* Id Image 2 */}
                  <CoreBox
                    gridProps={
                      {
                        gridSize    : { md: 2 }, 
                        styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]
                      }}>
                    <CoreImage
                      width={"150"}
                      height={"150"}
                      src={arnob}
                      alt="Id Image"/>

                    <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.COLOR.TEXT_WHITE]}>Utsav Manga</CoreTypographyBody1>
                  </CoreBox>

                  {/* Id Image 3 */}
                  <CoreBox
                    gridProps={
                      {
                        gridSize    : { md: 2 }, 
                        styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]
                      }}>
                    <CoreImage
                      width={"150"}
                      height={"150"}
                      src={rajarshi}
                      alt="Id Image"/>

                    <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.COLOR.TEXT_WHITE]}>Rajarshi</CoreTypographyBody1>
                  </CoreBox>

                  {/* Id Image 4*/}
                  <CoreBox
                    gridProps={
                      {
                        gridSize    : { md: 2 }, 
                        styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]
                      }}>
                    <CoreImage
                      width={"150"}
                      height={"150"}
                      src={sanjay}
                      alt="Id Image"/>

                    <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.COLOR.TEXT_WHITE]}>Sanjay</CoreTypographyBody1>
                  </CoreBox>

                  {/* Id Image 5 */}
                  <CoreBox
                    gridProps={
                      {
                        gridSize    : { md: 2 }, 
                        styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]
                      }}>
                    <CoreImage
                      width={"150"}
                      height={"150"}
                      src={swagata}
                      alt="Id Image"/>

                    <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.COLOR.TEXT_WHITE]}>Swagata</CoreTypographyBody1>
                  </CoreBox>

                  {/* Id Image 6 */}
                  <CoreBox
                    gridProps={
                      {
                        gridSize    : { md: 2 }, 
                        styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]
                      }}>
                    <CoreImage
                      width={"150"}
                      height={"150"}
                      src={surojit}
                      alt="Id Image"/>

                    <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.COLOR.TEXT_WHITE]}>Surojit</CoreTypographyBody1>
                  </CoreBox>
              
                </CoreGrid>
              </CoreBox>
            </CoreBox>
          </CoreBox>
        </CoreBox>
  
        {/* 5th Section */}
        <CoreGrid styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.PT5, CoreClasses.PADDING.PL5]}>
          {/* Id Image */}
          <CoreBox
            gridProps={
              {
                gridSize    : { md: 5 }, 
                styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]
              }}>
            <CoreImage
              width={"400"}
              height={"400"}
              src={Section6}
              alt="Id Image"/>
          </CoreBox>
            
          <CoreBox
            gridProps={{
              gridSize    : { md: 4 },
              styleClasses: [CoreClasses.ALIGNMENT.ALIGN_SELF_CENTER],
            }} >
            {/* Card Holder Name */}
            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_START, CoreClasses.PADDING.P1, CoreClasses.PADDING.PL5]}>
                  
              <CoreH5 styleClasses={[CoreClasses.PADDING.P1]}>link up your gadgets</CoreH5>
  
              <CoreH4 styleClasses={[CoreClasses.PADDING.PL1]}>Connect!!!</CoreH4>
  
              <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.P1, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>Check from our range of cables to keep you connected</CoreTypographyBody1>
      
              <CoreBox styleClasses={[CoreClasses.PADDING.PT3]}>
                <CoreContainedButton
                  color={"warning"}
                  styleClasses={[CoreClasses.WIDTH.W_50, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
                >View All Cablek</CoreContainedButton>
              </CoreBox>
                
            </CoreBox>
          </CoreBox>
        </CoreGrid>
  
        {/* 6th Section */}
        <CoreGrid styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.BG.BG_GREY_900]}>
  
          <CoreBox
            gridProps={{
              gridSize    : { md: 4 },
              styleClasses: [CoreClasses.ALIGNMENT.ALIGN_SELF_CENTER, CoreClasses.COLOR.TEXT_WHITE],
            }} >
            {/* Card Holder Name */}
            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_START, CoreClasses.PADDING.P1]}>
  
              <CoreH4 styleClasses={[CoreClasses.PADDING.PL1]}>muson</CoreH4>
  
              <CoreH5 styleClasses={[CoreClasses.PADDING.P1]}>all purpose microphones</CoreH5>
  
              <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.P1, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.COLOR.TEXT_WHITE]}>All purpose microphones perfectly suitable for vocals, acoustic instruments, podcasts, recording, broadcasting, and gaming</CoreTypographyBody1>
      
              <CoreBox styleClasses={[CoreClasses.PADDING.PT3]}>
                <CoreContainedButton
                  color={"warning"}
                  styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.TEXT.TEXT_TRANSFORM_CAPITALIZE]}
                >Sound Check</CoreContainedButton>
              </CoreBox>
                
            </CoreBox>
          </CoreBox>
  
          {/* Id Image */}
          <CoreBox
            gridProps={
              {
                gridSize    : { md: 5 }, 
                styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]
              }}>
            <CoreImage
              width={"500"}
              height={"500"}
              src={Muson}
              alt="Id Image"/>
  
          </CoreBox>
        </CoreGrid>
  
        {/* Form Section */}

        <CoreGrid styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.PT5, CoreClasses.PADDING.PB5, CoreClasses.PADDING.PR5]}>

          <CoreBox
            gridProps={{
              gridSize    : { md: 5 },
              styleClasses: [CoreClasses.ALIGNMENT.ALIGN_SELF_CENTER, CoreClasses.PADDING.PR5],
            }} >
            
            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_START, CoreClasses.PADDING.P1]}>

              <CoreH4 styleClasses={[CoreClasses.PADDING.PL1]}>upcoming products</CoreH4>

              <CoreH3 styleClasses={[CoreClasses.PADDING.P1]}>What is cooking?</CoreH3>

              <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.P1, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>Specialty Studio Equipment | Truly Isolated Power Supplies | Stompboxes | Build your own multi-effects stompboxes</CoreTypographyBody1>
    
            </CoreBox>
          </CoreBox>
       
          <CoreBox
            gridProps={
              {
                gridSize    : { md: 6 }, 
                styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]
              }}>
            <CoreCard styleClasses={[CoreClasses.PADDING.P4]}>

              <CoreForm
                formId="coreFormSampleSchema"
                formJson={{ coreFormSampleSchema: CoreFormSampleSchema }}
                authenticated={false}
                addForm={true}
                initData={{ data: "Hello" }}
                mode={FORM_EDIT_MODE}
                styleClasses={[CoreClasses.MARGIN.M3, CoreClasses.PADDING.P3]}
        
              />
            </CoreCard>
          </CoreBox>
        </CoreGrid>
  
        {/* Footer Section */}
        <CoreGrid styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.BG.BG_GREY_50]}>
  
          <CoreBox
            gridProps={{ gridSize: { md: 5 } }} >
            {/* Card Holder Name */}
            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_START, CoreClasses.PADDING.P1]}>
              <CoreTypographyBody1 styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_START]}>Follow Us</CoreTypographyBody1>
  
              <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START, CoreClasses.PADDING.PB4]}>
                <CoreImage
                  width={35}
                  height={35}
                  styleClasses={[CoreClasses.BORDER.BORDER_ROUNDED_CIRCLE, CoreClasses.PADDING.PR1]}
                  src={facebook}>
                </CoreImage>
  
                <CoreImage
                  width={35}
                  height={35}
                  styleClasses={[CoreClasses.BORDER.BORDER_ROUNDED_CIRCLE, CoreClasses.PADDING.PR1]}
                  src={instagram}>
                </CoreImage>
  
                <CoreImage
                  width={35}
                  height={35}
                  styleClasses={[CoreClasses.BORDER.BORDER_ROUNDED_CIRCLE, CoreClasses.PADDING.PR1]}
                  src={linkedin}>
                </CoreImage>
  
                <CoreImage
                  width={35}
                  height={35}
                  styleClasses={[CoreClasses.BORDER.BORDER_ROUNDED_CIRCLE, CoreClasses.PADDING.PR1]}
                  src={twitter}>
                </CoreImage>
  
                <CoreImage
                  width={35}
                  height={35}
                  styleClasses={[CoreClasses.BORDER.BORDER_ROUNDED_CIRCLE, CoreClasses.PADDING.PR1]}
                  src={youtube}>
                </CoreImage>
  
                <CoreImage
                  width={35}
                  height={35}
                  styleClasses={[CoreClasses.BORDER.BORDER_ROUNDED_CIRCLE]}
                  src={whatsapp}>
                </CoreImage>
              </CoreBox>
  
              <CoreTypographyBody1 styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>Product categories</CoreTypographyBody1>
  
              <CoreTypographyOverline styleClasses={[CoreClasses.FLEX.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.ALIGNMENT.ALIGN_ITEMS_START, CoreClasses.ALIGNMENT.ALIGN_SELF_START]}>
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Multiple Port Power Supplies </CoreLink>
  
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Single Port Power Supplies </CoreLink>
  
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Power Supplies for Pedals & Processors</CoreLink>
  
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Power Supplies for Keyboards </CoreLink>
  
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Studio Microphones</CoreLink>
  
                <CoreLink href="https://gigigadgets.com/why-nrg">Cables </CoreLink>
              </CoreTypographyOverline>
                
            </CoreBox>
          </CoreBox>
  
          <CoreBox
            gridProps={{ gridSize: { md: 2 } }} >
            {/* Card Holder Name */}
            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_START, CoreClasses.PADDING.P1]}>
  
              <CoreTypographyBody1 styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>Community</CoreTypographyBody1>
  
              <CoreTypographyOverline styleClasses={[
                CoreClasses.FLEX.FLEX,
                CoreClasses.FLEX.DIRECTION_COLUMN,
                CoreClasses.ALIGNMENT.ALIGN_ITEMS_START,
                CoreClasses.ALIGNMENT.ALIGN_SELF_START,
                CoreClasses.PADDING.PB2
              ]}>
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Artists </CoreLink>
  
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Endorsement </CoreLink>
              </CoreTypographyOverline>
  
              <CoreTypographyBody1 styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>Service & Support</CoreTypographyBody1>
  
              <CoreTypographyOverline styleClasses={[
                CoreClasses.FLEX.FLEX,
                CoreClasses.FLEX.DIRECTION_COLUMN,
                CoreClasses.ALIGNMENT.ALIGN_ITEMS_START,
                CoreClasses.ALIGNMENT.ALIGN_SELF_START,
                CoreClasses.PADDING.PB2
              ]}>
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Warranty </CoreLink>
  
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Service </CoreLink>
  
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Contact Us </CoreLink>
              </CoreTypographyOverline>
  
              <CoreTypographyBody1 styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>Gigi Gadgets</CoreTypographyBody1>
  
              <CoreTypographyOverline styleClasses={[CoreClasses.FLEX.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.ALIGNMENT.ALIGN_ITEMS_START, CoreClasses.ALIGNMENT.ALIGN_SELF_START]}>
  
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>About Us </CoreLink>
  
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Where to buy? </CoreLink>
              </CoreTypographyOverline>
                
            </CoreBox>
          </CoreBox>
  
          <CoreBox
            gridProps={{ gridSize: { md: 2 } }} >
            {/* Card Holder Name */}
            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_START, CoreClasses.PADDING.P1]}>
  
              <CoreTypographyBody1 styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>Policies</CoreTypographyBody1>
  
              <CoreTypographyOverline styleClasses={[CoreClasses.FLEX.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.ALIGNMENT.ALIGN_ITEMS_START, CoreClasses.ALIGNMENT.ALIGN_SELF_START]}>
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Terms & Conditions </CoreLink>
  
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Privacy Policy </CoreLink>
  
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Shipping Policy</CoreLink>
  
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Payment & Refund Policy </CoreLink>
  
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Cancellation & Return Policy</CoreLink>
  
                <CoreLink href="https://gigigadgets.com/why-nrg">Warranty Policy</CoreLink>
              </CoreTypographyOverline>
                
            </CoreBox>
          </CoreBox>
  
          <CoreBox
            gridProps={{ gridSize: { md: 2 } }} >
            {/* Card Holder Name */}
            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_START, CoreClasses.PADDING.P1, CoreClasses.PADDING.PB5]}>
  
              <CoreTypographyBody1 styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>Warehouse & Sales Office</CoreTypographyBody1>
  
              <CoreBox styleClasses={[CoreClasses.FLEX.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.PADDING.PB2]}>
                <CoreTypographyOverline>BJ 64, Sector II, Salt Lake, </CoreTypographyOverline>
  
                <CoreTypographyOverline>Kolkata, West Bengal, India. </CoreTypographyOverline>
  
                <CoreTypographyOverline>PIN - 700091</CoreTypographyOverline>
  
                <CoreTypographyOverline>Near BJ Market </CoreTypographyOverline>
              </CoreBox>
  
              <CoreBox styleClasses={[CoreClasses.FLEX.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.PADDING.PB2]}>
                <CoreTypographyOverline>Email:<CoreLink> gigigadgets@iquesters.com</CoreLink> </CoreTypographyOverline>
  
                <CoreTypographyOverline>WhatsApp:<CoreLink> +91 801 770 3797</CoreLink> </CoreTypographyOverline>
  
                <CoreTypographyOverline>Phone:<CoreLink> +91 801 770 3797</CoreLink></CoreTypographyOverline>
              </CoreBox>
  
              <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START, CoreClasses.PADDING.PB4]}>
                <CoreImage
                  width={113}
                  height={45}
                  styleClasses={[CoreClasses.BORDER.BORDER_1, CoreClasses.PADDING.PR1]}
                  src={paymentLogo}>
                </CoreImage>
              </CoreBox>
                
            </CoreBox>
          </CoreBox>
  
        </CoreGrid>

        {/*Footer Section 2 */}
        <CoreGrid>
          <CoreBox>
            <CoreBox styleClasses={[CoreClasses.BG.BG_GREY_300, CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_AROUND]}>

              <CoreBox>
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[]}>FAQ  </CoreLink>

                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[]}> Terms  Privacy   Policies </CoreLink>

              </CoreBox>

              <CoreBox>
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>Copyright © 2024 Gigi Gadgets </CoreLink>

              </CoreBox>

              <CoreBox>
                <CoreLink href="https://gigigadgets.com/why-nrg" styleClasses={[CoreClasses.PADDING.PB1]}>A brand owned by Iquester Solutions LLP </CoreLink>

              </CoreBox>
            
            </CoreBox>
          </CoreBox>
        </CoreGrid>
        
      </CoreLayoutItem>
        
    </>
  );
};
  
export default Home;
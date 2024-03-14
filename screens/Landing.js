import React,{useState} from "react";
import { StatusBar } from "expo-status-bar";

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeImage,
    LandingContainer,
    Avatar
} from "../components/style";


const Landing = ({navigation}) =>{
    return(
        <>
             <StatusBar style="dark"/> 
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require("../assets/solid.jpg")}/>
                <LandingContainer>
                <PageTitle welcome={true}>Welcome! friend </PageTitle>
                <SubTitle welcome={true}>Collector</SubTitle>
                <SubTitle welcome={true}>collector@gmail.com</SubTitle>
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={require('../assets/waste.jpg')}/>
                        <Line/>
                        <StyledButton onPress={()=>{navigation.navigate('login')}}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </LandingContainer>
            </InnerContainer>
        </>
    );
}

export default Landing;
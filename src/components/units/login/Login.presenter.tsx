import {
    LoginDiv, LoginBackDiv, LoginContentsDiv, LoginMoveDiv, LoginContents, Logo, LoginInputDiv, LogingDiv,
    LoginContent, LoginSubmit, LoginSubmitDiv, LoginOtherDiv
} from './Login.style';

import React from 'react';
export default function LoginPage({ 
    input,
    onChangeInput,
    able
}) {
    return(
        <LoginDiv>
            <LoginBackDiv>
                <LoginMoveDiv>
                    <img alt='' src='/images/signup.png'  />
                </LoginMoveDiv>

                <LoginContentsDiv>
                    <div></div>
                    <LoginContents>
                        <Logo alt='' src='/images/logo_white.png' />
                        
                        <form>
                            <LoginInputDiv>
                                <div></div>
                                <LoginContent>
                                    <div>
                                        <input name='email' type='text' placeholder='이메일을 입력해주세요.' maxLength={30}
                                               onChange={onChangeInput}
                                        />
                                    </div>

                                    <div>
                                        <input name='password' type='password' placeholder='비밀번호를 입력해주세요.' maxLength={20}
                                               onChange={onChangeInput}
                                        />
                                    </div>

                                    <LogingDiv>
                                        <img alt='' src='/images/logingIcon.png' />
                                        로그인 상태 유지
                                    </LogingDiv>

                                    <LoginSubmitDiv>
                                        <LoginSubmit type='submit' value='로그인하기' />
                                    </LoginSubmitDiv>

                                    <LoginOtherDiv>
                                        <div> <span> 이메일 찾기 </span> </div>
                                        <div> <span> 비밀번호 찾기 </span> </div>
                                        <div style={{ 'borderRight' : 'none' }}> <span> 회원가입 </span> </div>
                                    </LoginOtherDiv>
                                </LoginContent>
                                <div></div>
                            </LoginInputDiv>
                        </form>

                    </LoginContents>
                    <div></div>
                </LoginContentsDiv>
            </LoginBackDiv>
        </LoginDiv>
    )
}
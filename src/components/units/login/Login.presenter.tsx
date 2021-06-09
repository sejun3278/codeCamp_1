import {
    LoginDiv, LoginBackDiv, LoginContentsDiv, LoginMoveDiv, LoginContents, Logo, LoginInputDiv, LogingDiv,
    LoginContent, LoginSubmit, LoginSubmitDiv, LoginOtherDiv, ErrorAlert
} from './Login.style';

import React from 'react';
export default function LoginPage({ 
    input,
    onChangeInput,
    able,
    router,
    login,
    emailRef,
    passwordRef,
    errors
}) {
    return(
        <LoginDiv>
            <LoginBackDiv>
                <LoginMoveDiv>
                    <img alt='' src='/images/signup.png' title='홈으로 이동'
                         onClick={() => router.push('/')} 
                    />
                </LoginMoveDiv>

                <LoginContentsDiv>
                    <div></div>
                    <LoginContents>
                        <Logo alt='' src='/images/logo_white.png' 
                              onClick={() => router.push('/')}
                        />
                        
                        <form onSubmit={login}>
                            <LoginInputDiv>
                                <div></div>
                                <LoginContent>
                                    <div>
                                        <input name='email' type='text' placeholder='이메일을 입력해주세요.' maxLength={30}
                                               onChange={onChangeInput} value={input.email} ref={emailRef}
                                        />
                                    </div>
                                    {errors.email === true
                                        && <ErrorAlert> 이메일은 필수 입력입니다. </ErrorAlert>
                                    }

                                    <div>
                                        <input name='password' type='password' placeholder='비밀번호를 입력해주세요.' maxLength={20}
                                               onChange={onChangeInput} value={input.password} ref={passwordRef}
                                        />
                                    </div>

                                    {errors.password === true
                                        && <ErrorAlert> 비밀번호는 필수 입력입니다. </ErrorAlert>
                                    }

                                    <LogingDiv>
                                        <img alt='' src='/images/logingIcon.png' />
                                        로그인 상태 유지
                                    </LogingDiv>

                                    <LoginSubmitDiv>
                                        <LoginSubmit type='submit' value='로그인하기' 
                                                     style={able === true ? { 'backgroundColor' : '#FFD600', 'color' : 'black' } : undefined}
                                        />
                                    </LoginSubmitDiv>

                                    <LoginOtherDiv>
                                        <div> <span> 이메일 찾기 </span> </div>
                                        <div> <span> 비밀번호 찾기 </span> </div>
                                        <div style={{ 'borderRight' : 'none' }}> 
                                            <span onClick={() => router.push('/signup')}> 회원가입 </span> 
                                        </div>
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
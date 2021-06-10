import {
    SignupMoveDiv, SignupContentsDiv, SignupContents, Title, SignupInputDiv, SignupError,
    SignupComplateDiv, SignupComplateCloseDiv, SignupLogoDiv, SignupComplateConfirmDiv

} from './Signup.style';

import React from 'react';
import Modal from 'react-modal';

const modalStyles = {
    content : {
      top                   : '40%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      minWidth              : '380px'
    }
};
Modal.setAppElement('body');

export default function SignupPage({
    router,
    input,
    changeInput,
    signup,
    able,
    errors,
    complate,
    modal,
    moveLogin
}) {
    return(
        <>
            <SignupMoveDiv>
                <img alt='' src='/images/close_white.png' title='로그인으로 이동'
                        onClick={() => router.push('/login')} 
                />
            </SignupMoveDiv>

            <SignupContentsDiv>
                <div></div>
                <SignupContents>
                    <Modal
                        isOpen={modal}
                        style={modalStyles}
                    >
                        <SignupComplateDiv>
                            <SignupComplateCloseDiv>
                                <img alt='' src='/images/close.png' onClick={moveLogin} />
                            </SignupComplateCloseDiv>

                            <SignupLogoDiv>
                                <img alt='' src='/images/logo.png' />
                            </SignupLogoDiv>

                            <SignupComplateConfirmDiv>
                                회원가입을 환영합니다!

                                <div>
                                    <input type='button' value='로그인하기' onClick={moveLogin}/>
                                </div>
                            </SignupComplateConfirmDiv>
                        </SignupComplateDiv>
                    </Modal>

                    <h2>
                        회원가입
                    </h2>

                    <form onSubmit={signup}>
                        <SignupInputDiv>
                            <Title>
                                이메일
                            </Title>
                            <input type='text' name='email' maxLength={20} placeholder='이메일을 입력해주세요.' onChange={changeInput} />
                        
                            {errors.email !== false
                                && <SignupError> {errors.email} </SignupError>
                            }
                        </SignupInputDiv>

                        <SignupInputDiv>
                            <Title>
                                이름
                            </Title>
                            <input type='text' name='name' maxLength={10} placeholder='이름을 입력해주세요.' onChange={changeInput}/>
                        
                            {errors.name !== false
                                && <SignupError> {errors.name} </SignupError>
                            }
                        </SignupInputDiv>

                        <SignupInputDiv>
                            <Title>
                                비밀번호
                            </Title>
                            <input type='password' name='password' maxLength={20} placeholder='비밀번호를 입력해주세요.' onChange={changeInput}/>
                        
                            {errors.password !== false
                                && <SignupError> {errors.password} </SignupError>
                            }
                        </SignupInputDiv>

                        <SignupInputDiv>
                            <Title>
                                비밀번호 확인
                            </Title>
                            <input type='password' name='passwordConfirm' maxLength={20} placeholder='비밀번호 확인을 입력해주세요.' onChange={changeInput}/>
                        
                            {errors.passwordConfirm !== false
                                && <SignupError> {errors.passwordConfirm} </SignupError>
                            }
                        </SignupInputDiv>

                        <SignupInputDiv>
                            <input type='submit' value='회원가입' 
                                    style={able === true ? { 'backgroundColor' : '#FFD600', 'color' : 'black' } : undefined}
                            />
                        </SignupInputDiv>
                    </form>
                </SignupContents>
                <div></div>
            </SignupContentsDiv>
        </>
    )
}
export const checkImage = (image) => {
    if(!image) { 
        alert('이미지 파일을 등록해주세요');
        return false;
    }

    if(image.size > 1 * 1024 * 1024) {
        alert("파일의 크기가 5MB 미만까지 가능합니다.");
        return false;
    }

    if(!image.type.includes("png")) {
        alert("png 확장자만 가능합니다.");
        return false;
    }


    return true;
}
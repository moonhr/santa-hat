# Node.js 경량 이미지 사용
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일 복사 및 의존성 설치
COPY package*.json ./
RUN npm install

# 소스 코드 복사
COPY . .

# Next.js 빌드 및 정적 파일 생성
RUN npm run build
RUN npm run export

# 정적 파일만 유지
WORKDIR /app/out

# 정적 파일을 제공할 서버 설치
RUN npm install -g serve

# 정적 파일을 제공할 서버 실행
EXPOSE 3000
CMD ["serve", "-s", ".", "-l", "3000"]
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const app = express();
app.use(express.static("../build")); // build 파일 사용 허용
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const jsonFile = fs.readFileSync("./data/data.json", "utf8"); // json 파일 읽기
const jsonData = JSON.parse(jsonFile);
const PORT = process.env.port || 5000;

// 배너리스트
app.get("/api/mainContentsBannerList", (req, res) => {
  res.json(jsonData.mainContentsBannerList);
});

// 슬라이드 리스트
app.get("/api/mainContentsSlideList", (req, res) => {
  res.json(jsonData.mainContentsSlideList);
});

// 시리즈 리스트
app.get("/api/mainContentsSeriesList", (req, res) => {
  res.json(jsonData.mainContentsSeriesList);
});

// 캐릭터 1
app.get("/api/mainCharacterList1", (req, res) => {
  res.json(jsonData.mainCharacterList1);
});

// 캐릭터 2
app.get("/api/mainCharacterList2", (req, res) => {
  res.json(jsonData.mainCharacterList2);
});

// 캐릭터 3
app.get("/api/mainCharacterList3", (req, res) => {
  res.json(jsonData.mainCharacterList3);
});

// 매진
app.get("/api/mainRestockList", (req, res) => {
  res.json(jsonData.mainRestockList);
});

// 메뉴 카테고리 캐릭터
app.get("/api/menuCharacterListData", (req, res) => {
  res.json(jsonData.menuCharacterListData);
});

// 프로모션
app.get("/api/promotionlist", (req, res) => {
  res.json(jsonData.promotionlist);
});

// 상품
app.get("/api/product", (req, res) => {
  const { search, amount_ne } = req.query;
  if (amount_ne) {
    const amountFilter = jsonData.productListData.filter(
      (obj) => obj.amount !== 0
    ); // 잔여 수량 0개 아닌 것들만
    return res.json(amountFilter);
  }
  res.json(jsonData.productListData);
});

// 상세 상품
app.get("/api/product/:id", (req, res) => {
  const { id } = req.params;
  res.json(jsonData.productListData[id - 1]);
});

// 상품 실시간
app.get("/api/productlist/realtime", (req, res) => {
  const { limit, page } = req.query;
  const amountFilter = jsonData.productListData.filter(
    (obj) => obj.amount !== 0
  ); // 잔여 수량 0개 아닌 것들만
  const sortFilter = amountFilter.sort((a, b) => a.amount - b.amount); // 잔여 수량 오름차순
  res.json(sortFilter.slice((page - 1) * limit, page * limit));
});

// 상품 스테디
app.get("/api/productlist/steady", (req, res) => {
  const { limit, page } = req.query;
  res.json(jsonData.productListData.slice((page - 1) * limit, page * limit));
});

// 상품 검색
app.get("/api/search", (req, res) => {
  const { keyword, limit, page } = req.query;
  const searchFilter = jsonData.productListData.filter(
    (obj) =>
      obj.title.includes(decodeURIComponent(keyword)) ||
      obj.character.includes(decodeURIComponent(keyword))
  ); // 검색
  res.json(searchFilter.slice((page - 1) * limit, page * limit));
});

// 상품 검색 개수
app.get("/api/searchLength", (req, res) => {
  const { keyword } = req.query;
  res.json(
    jsonData.productListData.filter(
      (obj) =>
        obj.title.includes(decodeURIComponent(keyword)) ||
        obj.character.includes(decodeURIComponent(keyword))
    )
  );
});

// 상품 수량 업데이트
app.patch("/api/product/:id", (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;
  const filter = jsonData.productListData[id - 1];
  filter.amount = amount;
  res.send("success");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "../build/index.html");
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(PORT, () => console.log("server is running"));

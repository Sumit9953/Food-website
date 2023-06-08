import React from "react";

import resturant from "./media/resturantlogo.png";

import "./app.css";

const Title = () => {
  return (
    <a href="/">
      <div className="logo">
        <img className="logo-img" src={resturant} alt="logo" />
        <h1 id="title">
          <em>Food Machine</em>
        </h1>
      </div>
    </a>
  );
};

const Headrer = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul className="list-item">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resturantList = [
  {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "631821",
    "name": "Taco Bell",
    "uuid": "23f38147-a8f7-40d6-85fa-2a4ba5cd1ca8",
    "city": "4",
    "area": "Rohini",
    "totalRatingsString": "500+ ratings",
    "cloudinaryImageId": "e7f40335a66b230f5eda766022dfecbd",
    "cuisines": [
    "Mexican"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 30,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 30,
    "slaString": "30 MINS",
    "lastMileTravel": 2.0999999046325684,
    "slugs": {
    "restaurant": "taco-bell-unity-one-rohini",
    "city": "delhi"
    },
    "cityState": "4",
    "address": "Unity one mall Rohini, Bhagwan Mahavir Marg, Swarn Jayanti Park, Sector 10, Rohini, Delhi, 110085",
    "locality": "Unity One Mall",
    "parentId": 1557,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3200,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3200,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3200",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6999800~p=4~eid=00000188-99be-9747-0772-cf5100100467",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "631821",
    "deliveryTime": 30,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 30,
    "lastMileTravel": 2.0999999046325684,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.1",
    "totalRatings": 500,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "498382",
    "name": "Burger King",
    "uuid": "763f7df3-d4ff-4ade-b7a0-e185bbb211c4",
    "city": "4",
    "area": "Rohini",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "tags": [],
    "costForTwo": 35000,
    "costForTwoString": "₹350 FOR TWO",
    "deliveryTime": 26,
    "minDeliveryTime": 26,
    "maxDeliveryTime": 26,
    "slaString": "26 MINS",
    "lastMileTravel": 2,
    "slugs": {
    "restaurant": "burger-king-m2k-mall-rohini",
    "city": "delhi"
    },
    "cityState": "4",
    "address": "Shop No 3 to 10, Ground Floor,M2K Mall, Manglam Palace, District Centre,Sector-3, Rohini, Delhi - 110085",
    "locality": "M2K Mall",
    "parentId": 166,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3200,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3200,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3200",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "EVERY ITEM",
    "subHeader": "@ ₹129",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "498382",
    "deliveryTime": 26,
    "minDeliveryTime": 26,
    "maxDeliveryTime": 26,
    "lastMileTravel": 2,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.3",
    "totalRatings": 1000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "300087",
    "name": "Shree Gopal Ji ke chhole Bhature",
    "uuid": "d8e53ea6-f1ed-4e48-9f02-935df596f7c5",
    "city": "4",
    "area": "Rohini",
    "totalRatingsString": "5000+ ratings",
    "cloudinaryImageId": "p4fn2esrcxfeeefllnjz",
    "cuisines": [
    "North Indian",
    "Snacks"
    ],
    "tags": [],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 15,
    "minDeliveryTime": 15,
    "maxDeliveryTime": 15,
    "slaString": "15 MINS",
    "lastMileTravel": 0.8999999761581421,
    "slugs": {
    "restaurant": "shree-gopal-ji-ke-chhole-bhature-rohini-rohini",
    "city": "delhi"
    },
    "cityState": "4",
    "address": "Flat No. 148 Pocket 7, Rohini Sector 2",
    "locality": "Sector 2",
    "parentId": 184640,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3200,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3200,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3200",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.8 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "ABOVE ₹350",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "300087",
    "deliveryTime": 15,
    "minDeliveryTime": 15,
    "maxDeliveryTime": 15,
    "lastMileTravel": 0.8999999761581421,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.5",
    "totalRatings": 5000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "446812",
    "name": "Biryani By Kilo",
    "uuid": "6e3f5a86-c5ec-44c8-ab50-a9f365331579",
    "city": "4",
    "area": "Rohini",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "kt2g0h7hacw3e4axgtrp",
    "cuisines": [
    "Biryani",
    "Hyderabadi",
    "North Indian",
    "Kebabs",
    "Mughlai",
    "Desserts"
    ],
    "tags": [],
    "costForTwo": 70000,
    "costForTwoString": "₹700 FOR TWO",
    "deliveryTime": 35,
    "minDeliveryTime": 35,
    "maxDeliveryTime": 35,
    "slaString": "35 MINS",
    "lastMileTravel": 2.0999999046325684,
    "slugs": {
    "restaurant": "biryani-by-kilo-rohini-south-extension",
    "city": "delhi"
    },
    "cityState": "4",
    "address": "GROUND FLOOR VARDHMAN PREMIUM MALL, LSC, DEEPALI, OUTER RING ROAD ( OPPOSITE MANGLAM PALACE, SECTOR-3, ROHINI),PITAMPURA, Rohini, North West , Delhi-110034",
    "locality": "Rohini",
    "parentId": 130,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3200,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3200,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3200",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=7067378~p=7~eid=00000188-99be-9747-0772-cf5200100748",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "446812",
    "deliveryTime": 35,
    "minDeliveryTime": 35,
    "maxDeliveryTime": 35,
    "lastMileTravel": 2.0999999046325684,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.1",
    "totalRatings": 1000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "36900",
    "name": "Wah Bhai Wah",
    "uuid": "7ebbf893-5282-4cd2-8599-0b96126e6c83",
    "city": "4",
    "area": "Rohini",
    "totalRatingsString": "5000+ ratings",
    "cloudinaryImageId": "ach30rz8ebyckifblioq",
    "cuisines": [
    "North Indian",
    "Chinese",
    "Tandoor",
    "Beverages"
    ],
    "tags": [],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "slaString": "31 MINS",
    "lastMileTravel": 0.4000000059604645,
    "slugs": {
    "restaurant": "wah-bhai-wah-rohini-rohini",
    "city": "delhi"
    },
    "cityState": "4",
    "address": "A 1/168 & 169, Sector 4, Rohini, New Delhi",
    "locality": "Sector 4",
    "parentId": 14882,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3200,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3200,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3200",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.4 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹299",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "36900",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "lastMileTravel": 0.4000000059604645,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.7",
    "totalRatings": 5000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "389326",
    "name": "Bittoo Samosay Wala",
    "uuid": "b784d46d-78f4-4169-a7e9-6a57527a629f",
    "city": "4",
    "area": "Rohini",
    "totalRatingsString": "500+ ratings",
    "cloudinaryImageId": "aawlxgtno7oq9qfylkrf",
    "cuisines": [
    "Snacks",
    "Chinese",
    "Chaat"
    ],
    "tags": [],
    "costForTwo": 19900,
    "costForTwoString": "₹199 FOR TWO",
    "deliveryTime": 17,
    "minDeliveryTime": 17,
    "maxDeliveryTime": 17,
    "slaString": "17 MINS",
    "lastMileTravel": 0.20000000298023224,
    "slugs": {
    "restaurant": "bittoo-samosay-wala-rohini-rohini",
    "city": "delhi"
    },
    "cityState": "4",
    "address": "Shop no. - E19/312, Rohini sec- 3, New Delhi-110085",
    "locality": "Sector 3",
    "parentId": 242406,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3200,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3200,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3200",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.2 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "389326",
    "deliveryTime": 17,
    "minDeliveryTime": 17,
    "maxDeliveryTime": 17,
    "lastMileTravel": 0.20000000298023224,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.8",
    "totalRatings": 500,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "10391",
    "name": "Lotus Leaf",
    "uuid": "e217f2d8-6f3e-4614-831b-aa991456d0cc",
    "city": "4",
    "area": "Prashant Vihar",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "sfq58ked1ak0rwwxnctk",
    "cuisines": [
    "Indian",
    "Chinese"
    ],
    "tags": [],
    "costForTwo": 80000,
    "costForTwoString": "₹800 FOR TWO",
    "deliveryTime": 36,
    "minDeliveryTime": 36,
    "maxDeliveryTime": 36,
    "slaString": "36 MINS",
    "lastMileTravel": 4.699999809265137,
    "slugs": {
    "restaurant": "lotus-leaf-rohini-rohini",
    "city": "delhi"
    },
    "cityState": "4",
    "address": "F-104, Fun city mall, Prashant vihar, sector 14, Rohini",
    "locality": "Prashant Vihar",
    "parentId": 14242,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 4000,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 4000,
    "message": "",
    "title": "Delivery Charge",
    "amount": "4000",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6953923~p=10~eid=00000188-99be-9747-0772-cf5300100a0d",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "4.6 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "10391",
    "deliveryTime": 36,
    "minDeliveryTime": 36,
    "maxDeliveryTime": 36,
    "lastMileTravel": 4.699999809265137,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.1",
    "totalRatings": 1000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "10324",
    "name": "Jaiveer Naan & Chaap",
    "uuid": "70fcf0ee-e540-4b6d-a677-14a432ae11a5",
    "city": "4",
    "area": "Rohini",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "y4kbrpmykbfnmaoy96lg",
    "cuisines": [
    "North Indian",
    "Snacks",
    "Punjabi"
    ],
    "tags": [],
    "costForTwo": 50000,
    "costForTwoString": "₹500 FOR TWO",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "slaString": "31 MINS",
    "lastMileTravel": 2,
    "slugs": {
    "restaurant": "jaiveer-foods-rohini-rohini",
    "city": "delhi"
    },
    "cityState": "4",
    "address": "Shop No. 95, Aggarwal City Plaza, Near M2K, Rohini Sec 3",
    "locality": "Sector 3",
    "parentId": 109221,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3200,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3200,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3200",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "10324",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "lastMileTravel": 2,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.0",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "530300",
    "name": "Chaayos Chai+Snacks=Relax",
    "uuid": "3425e709-4adf-43d6-b160-d479346bad37",
    "city": "4",
    "area": "Rohini",
    "totalRatingsString": "500+ ratings",
    "cloudinaryImageId": "2beebd3688e63e027ee8a11c1c8a72c8",
    "cuisines": [
    "Bakery",
    "Beverages",
    "Chaat",
    "Desserts",
    "Home Food",
    "Italian",
    "Maharashtrian",
    "Snacks",
    "Street Food",
    "Sweets"
    ],
    "tags": [],
    "costForTwo": 25000,
    "costForTwoString": "₹250 FOR TWO",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "slaString": "33 MINS",
    "lastMileTravel": 5.599999904632568,
    "slugs": {
    "restaurant": "chaayos-chaisnacksrelax-sector-15-rohini-kothrud",
    "city": "delhi"
    },
    "cityState": "4",
    "address": "Unit No- F- 15/40, FF, Sector 15, Rohini, Rohini, North West , Delhi-110089",
    "locality": "Sector 15",
    "parentId": 281782,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 4800,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 4800,
    "message": "",
    "title": "Delivery Charge",
    "amount": "4800",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6894580~p=13~eid=00000188-99be-9747-0772-cf5400100d55",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "5.5 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "530300",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "lastMileTravel": 5.599999904632568,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.3",
    "totalRatings": 500,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "703654",
    "name": "Delhi Food",
    "uuid": "316e75f1-e009-4004-8d4b-dbf6b8919c6b",
    "city": "4",
    "area": "Rohini",
    "totalRatingsString": "20+ ratings",
    "cloudinaryImageId": "",
    "cuisines": [
    "Indian"
    ],
    "tags": [],
    "costForTwo": 100,
    "costForTwoString": "₹1 FOR TWO",
    "deliveryTime": 27,
    "minDeliveryTime": 27,
    "maxDeliveryTime": 27,
    "slaString": "27 MINS",
    "lastMileTravel": 0.800000011920929,
    "slugs": {
    "restaurant": "delhi-food-rohini-rohini",
    "city": "delhi"
    },
    "cityState": "4",
    "address": "33, Maharaja Agrasen Marg, Pocket 33, Sector 3H, Rohini, Delhi, 110085, India",
    "locality": "Sector 3H",
    "parentId": 69999,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3200,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3200,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3200",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.8 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "703654",
    "deliveryTime": 27,
    "minDeliveryTime": 27,
    "maxDeliveryTime": 27,
    "lastMileTravel": 0.800000011920929,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.3",
    "totalRatings": 20,
    "new": true
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "660693",
    "name": "Hariram Sweets",
    "uuid": "e7a6e546-2c29-4674-a471-ed5b79caebff",
    "city": "4",
    "area": "Rohini",
    "totalRatingsString": "50+ ratings",
    "cloudinaryImageId": "a8702c29d8200bc1f0c942e78e81809f",
    "cuisines": [
    "Sweets",
    "Street Food",
    "North Indian",
    "Snacks",
    "South Indian"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 36,
    "minDeliveryTime": 36,
    "maxDeliveryTime": 36,
    "slaString": "36 MINS",
    "lastMileTravel": 6,
    "slugs": {
    "restaurant": "hariram-sweets-rohini-rohini-3",
    "city": "delhi"
    },
    "cityState": "4",
    "address": "D-3/17-18, Pocket 3, Sector 16, Rohini, New Delhi, Delhi 110085, India",
    "locality": "Sector 16",
    "parentId": 309854,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 5600,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 5600,
    "message": "",
    "title": "Delivery Charge",
    "amount": "5600",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=7041268~p=16~eid=00000188-99be-9747-0772-cf550010103f",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "6 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "660693",
    "deliveryTime": 36,
    "minDeliveryTime": 36,
    "maxDeliveryTime": 36,
    "lastMileTravel": 6,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "3.6",
    "totalRatings": 50,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "330354",
    "name": "MADRAS CAFE",
    "uuid": "634cba1d-8a00-485a-98b9-70d356dd0f26",
    "city": "4",
    "area": "Rohini",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "xaqdcwc6k6uepb7lww2i",
    "cuisines": [
    "South Indian"
    ],
    "tags": [],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 25,
    "minDeliveryTime": 25,
    "maxDeliveryTime": 25,
    "slaString": "25 MINS",
    "lastMileTravel": 1.2999999523162842,
    "slugs": {
    "restaurant": "madras-café-rohini-rohini",
    "city": "delhi"
    },
    "cityState": "4",
    "address": "D-14/160, SECTOR-3, ROHINI, North West , Delhi-110085",
    "locality": "Sector 3",
    "parentId": 612,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3200,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3200,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3200",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "1.2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "UPTO ₹40",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "sla": {
    "restaurantId": "330354",
    "deliveryTime": 25,
    "minDeliveryTime": 25,
    "maxDeliveryTime": 25,
    "lastMileTravel": 1.2999999523162842,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.6",
    "totalRatings": 1000,
    "new": false
    },
    "subtype": "basic"
    }
];

const ResturantCard = (props) => {
  console.log(props.restaurant.data);
  return (
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ props.restaurant.data?.cloudinaryImageId } alt="" />
      <h2>{props.restaurant.data?.name}</h2>
      <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
      <h4>{props.restaurant.data?.avgRating} star</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="resturnat-lists">
      <ResturantCard restaurant = {resturantList[0]} /> 
      <ResturantCard restaurant = {resturantList[1]} /> 
      <ResturantCard restaurant = {resturantList[2]} /> 
      <ResturantCard restaurant = {resturantList[3]} /> 
      <ResturantCard restaurant = {resturantList[4]} /> 
      <ResturantCard restaurant = {resturantList[5]} /> 
      <ResturantCard restaurant = {resturantList[0]} /> 
      <ResturantCard restaurant = {resturantList[1]} /> 
      <ResturantCard restaurant = {resturantList[2]} /> 
      <ResturantCard restaurant = {resturantList[3]} /> 
      <ResturantCard restaurant = {resturantList[4]} /> 
      <ResturantCard restaurant = {resturantList[5]} /> 
    </div>
  );
};
const Footer = () => {
  return <h1>Footer</h1>;
};

const App = () => {
  return (
    <>
      <Headrer />
      <Body />
      <Footer />
    </>
  );
};

export default App;

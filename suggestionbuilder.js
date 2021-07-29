/*
    =============================================================================
    *****************************************************************************
    The contents of this file are subject to the Mozilla Public License
    Version 1.1 (the "License"); you may not use this file except in
    compliance with the License. You may obtain a copy of the License at
    http://www.mozilla.org/MPL/

    Software distributed under the License is distributed on an "AS IS"
    basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
    License for the specific language governing rights and limitations
    under the License.

    The Original Code is jsAvroPhonetic

    The Initial Developer of the Original Code is
    Mehdi Hasan Khan <mhasan@omicronlab.com>

    Copyright (C) OmicronLab (http://www.omicronlab.com). All Rights Reserved.


    Contributor(s): Abdullah AL Shohag (C) 2021 .

    *****************************************************************************
    =============================================================================
*/

//.import Qt.labs.platform 1.0 as JsQtTest

var suffixDict = {"e":"\u09c7","r":"\u09b0","y":"\u09df","o":"\u0993","i":"\u0987","eo":"\u09c7\u0993","ei":"\u09c7\u0987","er":"\u09c7\u09b0","gon":"\u0997\u09a3","ke":"\u0995\u09c7","ro":"\u09b0\u0993","ri":"\u09b0\u0987","ra":"\u09b0\u09be","re":"\u09b0\u09c7","te":"\u09a4\u09c7","yo":"\u09df\u0993","yi":"\u09df\u0987","ye":"\u09df\u09c7","shob":"\u09b8\u09ac","sob":"\u09b8\u09ac","ta":"\u099f\u09be","ti":"\u099f\u09bf","shoho":"\u09b8\u09b9","soho":"\u09b8\u09b9","der":"\u09a6\u09c7\u09b0","digo":"\u09a6\u09bf\u0997","ero":"\u09c7\u09b0\u0993","eri":"\u09c7\u09b0\u0987","era":"\u09c7\u09b0\u09be","ere":"\u09c7\u09b0\u09c7","ete":"\u09c7\u09a4\u09c7","gono":"\u0997\u09a3\u0993","goni":"\u0997\u09a3\u0987","gone":"\u0997\u09a3\u09c7","keo":"\u0995\u09c7\u0993","kei":"\u0995\u09c7\u0987","rao":"\u09b0\u09be\u0993","rai":"\u09b0\u09be\u0987","reo":"\u09b0\u09c7\u0993","rei":"\u09b0\u09c7\u0987","teo":"\u09a4\u09c7\u0993","tei":"\u09a4\u09c7\u0987","yeo":"\u09df\u09c7\u0993","yei":"\u09df\u09c7\u0987","yer":"\u09df\u09c7\u09b0","kul":"\u0995\u09c1\u09b2","shobo":"\u09b8\u09ac\u0993","shobi":"\u09b8\u09ac\u0987","shobe":"\u09b8\u09ac\u09c7","shokol":"\u09b8\u0995\u09b2","sobo":"\u09b8\u09ac\u0993","sobi":"\u09b8\u09ac\u0987","sobe":"\u09b8\u09ac\u09c7","sokol":"\u09b8\u0995\u09b2","tao":"\u099f\u09be\u0993","tai":"\u099f\u09be\u0987","tar":"\u099f\u09be\u09b0","tay":"\u099f\u09be\u09df","tio":"\u099f\u09bf\u0993","tii":"\u099f\u09bf\u0987","tir":"\u099f\u09bf\u09b0","shohoo":"\u09b8\u09b9\u0993","shohoi":"\u09b8\u09b9\u0987","sohoo":"\u09b8\u09b9\u0993","sohoi":"\u09b8\u09b9\u0987","tuk":"\u099f\u09c1\u0995","gun":"\u0997\u09c1\u09a3","dero":"\u09a6\u09c7\u09b0\u0993","deri":"\u09a6\u09c7\u09b0\u0987","dige":"\u09a6\u09bf\u0997\u09c7","digoo":"\u09a6\u09bf\u0997\u0993","digoi":"\u09a6\u09bf\u0997\u0987","erao":"\u09c7\u09b0\u09be\u0993","erai":"\u09c7\u09b0\u09be\u0987","ereo":"\u09c7\u09b0\u09c7\u0993","erei":"\u09c7\u09b0\u09c7\u0987","eteo":"\u09c7\u09a4\u09c7\u0993","etei":"\u09c7\u09a4\u09c7\u0987","goneo":"\u0997\u09a3\u09c7\u0993","gonei":"\u0997\u09a3\u09c7\u0987","goner":"\u0997\u09a3\u09c7\u09b0","gonke":"\u0997\u09a3\u0995\u09c7","gula":"\u0997\u09c1\u09b2\u09be","guli":"\u0997\u09c1\u09b2\u09bf","gulo":"\u0997\u09c1\u09b2\u09cb","yero":"\u09df\u09c7\u09b0\u0993","yeri":"\u09df\u09c7\u09b0\u0987","yera":"\u09df\u09c7\u09b0\u09be","yere":"\u09df\u09c7\u09b0\u09c7","yete":"\u09df\u09c7\u09a4\u09c7","borgo":"\u09ac\u09b0\u09cd\u0997","borrgo":"\u09ac\u09b0\u09cd\u0997","gonra":"\u0997\u09a3\u09b0\u09be","khana":"\u0996\u09be\u09a8\u09be","khani":"\u0996\u09be\u09a8\u09bf","kulo":"\u0995\u09c1\u09b2\u0993","kuli":"\u0995\u09c1\u09b2\u0987","kule":"\u0995\u09c1\u09b2\u09c7","mala":"\u09ae\u09be\u09b2\u09be","raji":"\u09b0\u09be\u099c\u09bf","razi":"\u09b0\u09be\u099c\u09bf","shobeo":"\u09b8\u09ac\u09c7\u0993","shobei":"\u09b8\u09ac\u09c7\u0987","shober":"\u09b8\u09ac\u09c7\u09b0","shobke":"\u09b8\u09ac\u0995\u09c7","shokolo":"\u09b8\u0995\u09b2\u0993","shokoli":"\u09b8\u0995\u09b2\u0987","shokole":"\u09b8\u0995\u09b2\u09c7","shomuho":"\u09b8\u09ae\u09c2\u09b9","sobeo":"\u09b8\u09ac\u09c7\u0993","sobei":"\u09b8\u09ac\u09c7\u0987","sober":"\u09b8\u09ac\u09c7\u09b0","sobke":"\u09b8\u09ac\u0995\u09c7","sokolo":"\u09b8\u0995\u09b2\u0993","sokoli":"\u09b8\u0995\u09b2\u0987","sokole":"\u09b8\u0995\u09b2\u09c7","somuho":"\u09b8\u09ae\u09c2\u09b9","take":"\u099f\u09be\u0995\u09c7","taro":"\u099f\u09be\u09b0\u0993","tari":"\u099f\u09be\u09b0\u0987","tare":"\u099f\u09be\u09b0\u09c7","tate":"\u099f\u09be\u09a4\u09c7","tayo":"\u099f\u09be\u09df\u0993","tayi":"\u099f\u09be\u09df\u0987","tike":"\u099f\u09bf\u0995\u09c7","tiro":"\u099f\u09bf\u09b0\u0993","tiri":"\u099f\u09bf\u09b0\u0987","tire":"\u099f\u09bf\u09b0\u09c7","tite":"\u099f\u09bf\u09a4\u09c7","mulok":"\u09ae\u09c2\u09b2\u0995","shuchok":"\u09b8\u09c2\u099a\u0995","shucok":"\u09b8\u09c2\u099a\u0995","suchok":"\u09b8\u09c2\u099a\u0995","sucok":"\u09b8\u09c2\u099a\u0995","gaca":"\u0997\u09be\u099b\u09be","gacha":"\u0997\u09be\u099b\u09be","gachha":"\u0997\u09be\u099b\u09be","gachhi":"\u0997\u09be\u099b\u09bf","gachi":"\u0997\u09be\u099b\u09bf","gaci":"\u0997\u09be\u099b\u09bf","tuko":"\u099f\u09c1\u0995\u0993","tuki":"\u099f\u09c1\u0995\u0987","tuke":"\u099f\u09c1\u0995\u09c7","tuku":"\u099f\u09c1\u0995\u09c1","guno":"\u0997\u09c1\u09a3\u0993","guni":"\u0997\u09c1\u09a3\u0987","derke":"\u09a6\u09c7\u09b0\u0995\u09c7","digeo":"\u09a6\u09bf\u0997\u09c7\u0993","digei":"\u09a6\u09bf\u0997\u09c7\u0987","diger":"\u09a6\u09bf\u0997\u09c7\u09b0","digoke":"\u09a6\u09bf\u0997\u0995\u09c7","digore":"\u09a6\u09bf\u0997\u09b0\u09c7","gonero":"\u0997\u09a3\u09c7\u09b0\u0993","goneri":"\u0997\u09a3\u09c7\u09b0\u0987","gonkeo":"\u0997\u09a3\u0995\u09c7\u0993","gonkei":"\u0997\u09a3\u0995\u09c7\u0987","gulao":"\u0997\u09c1\u09b2\u09be\u0993","gulai":"\u0997\u09c1\u09b2\u09be\u0987","gulan":"\u0997\u09c1\u09b2\u09be\u09a8","gular":"\u0997\u09c1\u09b2\u09be\u09b0","gulio":"\u0997\u09c1\u09b2\u09bf\u0993","gulii":"\u0997\u09c1\u09b2\u09bf\u0987","gulir":"\u0997\u09c1\u09b2\u09bf\u09b0","guloo":"\u0997\u09c1\u09b2\u09cb\u0993","guloi":"\u0997\u09c1\u09b2\u09cb\u0987","gulor":"\u0997\u09c1\u09b2\u09cb\u09b0","yerao":"\u09df\u09c7\u09b0\u09be\u0993","yerai":"\u09df\u09c7\u09b0\u09be\u0987","yereo":"\u09df\u09c7\u09b0\u09c7\u0993","yerei":"\u09df\u09c7\u09b0\u09c7\u0987","yeteo":"\u09df\u09c7\u09a4\u09c7\u0993","yetei":"\u09df\u09c7\u09a4\u09c7\u0987","borge":"\u09ac\u09b0\u09cd\u0997\u09c7","borgoo":"\u09ac\u09b0\u09cd\u0997\u0993","borgoi":"\u09ac\u09b0\u09cd\u0997\u0987","borrge":"\u09ac\u09b0\u09cd\u0997\u09c7","borrgoo":"\u09ac\u09b0\u09cd\u0997\u0993","borrgoi":"\u09ac\u09b0\u09cd\u0997\u0987","brindo":"\u09ac\u09c3\u09a8\u09cd\u09a6","brrindo":"\u09ac\u09c3\u09a8\u09cd\u09a6","gonrao":"\u0997\u09a3\u09b0\u09be\u0993","gonrai":"\u0997\u09a3\u09b0\u09be\u0987","khanao":"\u0996\u09be\u09a8\u09be\u0993","khanai":"\u0996\u09be\u09a8\u09be\u0987","khanar":"\u0996\u09be\u09a8\u09be\u09b0","khanay":"\u0996\u09be\u09a8\u09be\u09df","khaner":"\u0996\u09be\u09a8\u09c7\u09b0","khanio":"\u0996\u09be\u09a8\u09bf\u0993","khanii":"\u0996\u09be\u09a8\u09bf\u0987","khanir":"\u0996\u09be\u09a8\u09bf\u09b0","kuleo":"\u0995\u09c1\u09b2\u09c7\u0993","kulei":"\u0995\u09c1\u09b2\u09c7\u0987","kuler":"\u0995\u09c1\u09b2\u09c7\u09b0","kulke":"\u0995\u09c1\u09b2\u0995\u09c7","malao":"\u09ae\u09be\u09b2\u09be\u0993","malai":"\u09ae\u09be\u09b2\u09be\u0987","malar":"\u09ae\u09be\u09b2\u09be\u09b0","malay":"\u09ae\u09be\u09b2\u09be\u09df","punjo":"\u09aa\u09c1\u099e\u09cd\u099c","rajio":"\u09b0\u09be\u099c\u09bf\u0993","rajii":"\u09b0\u09be\u099c\u09bf\u0987","rajir":"\u09b0\u09be\u099c\u09bf\u09b0","razio":"\u09b0\u09be\u099c\u09bf\u0993","razii":"\u09b0\u09be\u099c\u09bf\u0987","shobero":"\u09b8\u09ac\u09c7\u09b0\u0993","shoberi":"\u09b8\u09ac\u09c7\u09b0\u0987","shobkeo":"\u09b8\u09ac\u0995\u09c7\u0993","shobkei":"\u09b8\u09ac\u0995\u09c7\u0987","shokoleo":"\u09b8\u0995\u09b2\u09c7\u0993","shokolei":"\u09b8\u0995\u09b2\u09c7\u0987","shokoler":"\u09b8\u0995\u09b2\u09c7\u09b0","shokolke":"\u09b8\u0995\u09b2\u0995\u09c7","shokolre":"\u09b8\u0995\u09b2\u09b0\u09c7","shomuhe":"\u09b8\u09ae\u09c2\u09b9\u09c7","shomuhoo":"\u09b8\u09ae\u09c2\u09b9\u0993","shomuhoi":"\u09b8\u09ae\u09c2\u09b9\u0987","sobero":"\u09b8\u09ac\u09c7\u09b0\u0993","soberi":"\u09b8\u09ac\u09c7\u09b0\u0987","sobkeo":"\u09b8\u09ac\u0995\u09c7\u0993","sobkei":"\u09b8\u09ac\u0995\u09c7\u0987","sokoleo":"\u09b8\u0995\u09b2\u09c7\u0993","sokolei":"\u09b8\u0995\u09b2\u09c7\u0987","sokoler":"\u09b8\u0995\u09b2\u09c7\u09b0","sokolke":"\u09b8\u0995\u09b2\u0995\u09c7","sokolre":"\u09b8\u0995\u09b2\u09b0\u09c7","somuhe":"\u09b8\u09ae\u09c2\u09b9\u09c7","somuhoo":"\u09b8\u09ae\u09c2\u09b9\u0993","somuhoi":"\u09b8\u09ae\u09c2\u09b9\u0987","takeo":"\u099f\u09be\u0995\u09c7\u0993","takei":"\u099f\u09be\u0995\u09c7\u0987","tareo":"\u099f\u09be\u09b0\u09c7\u0993","tarei":"\u099f\u09be\u09b0\u09c7\u0987","tateo":"\u099f\u09be\u09a4\u09c7\u0993","tatei":"\u099f\u09be\u09a4\u09c7\u0987","tikeo":"\u099f\u09bf\u0995\u09c7\u0993","tikei":"\u099f\u09bf\u0995\u09c7\u0987","tireo":"\u099f\u09bf\u09b0\u09c7\u0993","tirei":"\u099f\u09bf\u09b0\u09c7\u0987","titeo":"\u099f\u09bf\u09a4\u09c7\u0993","titei":"\u099f\u09bf\u09a4\u09c7\u0987","bises":"\u09ac\u09bf\u09b6\u09c7\u09b7","bishesh":"\u09ac\u09bf\u09b6\u09c7\u09b7","jatio":"\u099c\u09be\u09a4\u09c0\u09df","jatiyo":"\u099c\u09be\u09a4\u09c0\u09df","muloko":"\u09ae\u09c2\u09b2\u0995\u0993","muloki":"\u09ae\u09c2\u09b2\u0995\u0987","shuchoko":"\u09b8\u09c2\u099a\u0995\u0993","shuchoki":"\u09b8\u09c2\u099a\u0995\u0987","shucoko":"\u09b8\u09c2\u099a\u0995\u0993","shucoki":"\u09b8\u09c2\u099a\u0995\u0987","suchoko":"\u09b8\u09c2\u099a\u0995\u0993","suchoki":"\u09b8\u09c2\u099a\u0995\u0987","sucoko":"\u09b8\u09c2\u099a\u0995\u0993","sucoki":"\u09b8\u09c2\u099a\u0995\u0987","gacao":"\u0997\u09be\u099b\u09be\u0993","gacai":"\u0997\u09be\u099b\u09be\u0987","gacar":"\u0997\u09be\u099b\u09be\u09b0","gachao":"\u0997\u09be\u099b\u09be\u0993","gachai":"\u0997\u09be\u099b\u09be\u0987","gachar":"\u0997\u09be\u099b\u09be\u09b0","gachhao":"\u0997\u09be\u099b\u09be\u0993","gachhai":"\u0997\u09be\u099b\u09be\u0987","gachhar":"\u0997\u09be\u099b\u09be\u09b0","gachhio":"\u0997\u09be\u099b\u09bf\u0993","gachhii":"\u0997\u09be\u099b\u09bf\u0987","gachhir":"\u0997\u09be\u099b\u09bf\u09b0","gachio":"\u0997\u09be\u099b\u09bf\u0993","gachii":"\u0997\u09be\u099b\u09bf\u0987","gachir":"\u0997\u09be\u099b\u09bf\u09b0","gacio":"\u0997\u09be\u099b\u09bf\u0993","gacii":"\u0997\u09be\u099b\u09bf\u0987","gacir":"\u0997\u09be\u099b\u09bf\u09b0","tukeo":"\u099f\u09c1\u0995\u09c7\u0993","tukei":"\u099f\u09c1\u0995\u09c7\u0987","tuker":"\u099f\u09c1\u0995\u09c7\u09b0","tukke":"\u099f\u09c1\u0995\u0995\u09c7","tukre":"\u099f\u09c1\u0995\u09b0\u09c7","tukte":"\u099f\u09c1\u0995\u09a4\u09c7","tukuo":"\u099f\u09c1\u0995\u09c1\u0993","tukui":"\u099f\u09c1\u0995\u09c1\u0987","tukun":"\u099f\u09c1\u0995\u09c1\u09a8","tukur":"\u099f\u09c1\u0995\u09c1\u09b0","guner":"\u0997\u09c1\u09a3\u09c7\u09b0","gunke":"\u0997\u09c1\u09a3\u0995\u09c7","gunre":"\u0997\u09c1\u09a3\u09b0\u09c7","dara":"\u09a6\u09cd\u09ac\u09be\u09b0\u09be","derkeo":"\u09a6\u09c7\u09b0\u0995\u09c7\u0993","derkei":"\u09a6\u09c7\u09b0\u0995\u09c7\u0987","digero":"\u09a6\u09bf\u0997\u09c7\u09b0\u0993","digeri":"\u09a6\u09bf\u0997\u09c7\u09b0\u0987","digere":"\u09a6\u09bf\u0997\u09c7\u09b0\u09c7","digete":"\u09a6\u09bf\u0997\u09c7\u09a4\u09c7","digokeo":"\u09a6\u09bf\u0997\u0995\u09c7\u0993","digokei":"\u09a6\u09bf\u0997\u0995\u09c7\u0987","digoreo":"\u09a6\u09bf\u0997\u09b0\u09c7\u0993","digorei":"\u09a6\u09bf\u0997\u09b0\u09c7\u0987","dwara":"\u09a6\u09cd\u09ac\u09be\u09b0\u09be","gulake":"\u0997\u09c1\u09b2\u09be\u0995\u09c7","gulano":"\u0997\u09c1\u09b2\u09be\u09a8\u0993","gulani":"\u0997\u09c1\u09b2\u09be\u09a8\u0987","gularo":"\u0997\u09c1\u09b2\u09be\u09b0\u0993","gulari":"\u0997\u09c1\u09b2\u09be\u09b0\u0987","gulate":"\u0997\u09c1\u09b2\u09be\u09a4\u09c7","gulike":"\u0997\u09c1\u09b2\u09bf\u0995\u09c7","guliro":"\u0997\u09c1\u09b2\u09bf\u09b0\u0993","guliri":"\u0997\u09c1\u09b2\u09bf\u09b0\u0987","gulite":"\u0997\u09c1\u09b2\u09bf\u09a4\u09c7","guloke":"\u0997\u09c1\u09b2\u09cb\u0995\u09c7","guloro":"\u0997\u09c1\u09b2\u09cb\u09b0\u0993","gulori":"\u0997\u09c1\u09b2\u09cb\u09b0\u0987","gulote":"\u0997\u09c1\u09b2\u09cb\u09a4\u09c7","korrtrrik":"\u0995\u09b0\u09cd\u09a4\u09c3\u0995","kortrik":"\u0995\u09b0\u09cd\u09a4\u09c3\u0995","borgeo":"\u09ac\u09b0\u09cd\u0997\u09c7\u0993","borgei":"\u09ac\u09b0\u09cd\u0997\u09c7\u0987","borger":"\u09ac\u09b0\u09cd\u0997\u09c7\u09b0","borgoke":"\u09ac\u09b0\u09cd\u0997\u0995\u09c7","borrgeo":"\u09ac\u09b0\u09cd\u0997\u09c7\u0993","borrgei":"\u09ac\u09b0\u09cd\u0997\u09c7\u0987","borrger":"\u09ac\u09b0\u09cd\u0997\u09c7\u09b0","borrgoke":"\u09ac\u09b0\u09cd\u0997\u0995\u09c7","brinde":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7","brindoo":"\u09ac\u09c3\u09a8\u09cd\u09a6\u0993","brindoi":"\u09ac\u09c3\u09a8\u09cd\u09a6\u0987","brrinde":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7","brrindoo":"\u09ac\u09c3\u09a8\u09cd\u09a6\u0993","brrindoi":"\u09ac\u09c3\u09a8\u09cd\u09a6\u0987","khanake":"\u0996\u09be\u09a8\u09be\u0995\u09c7","khanaro":"\u0996\u09be\u09a8\u09be\u09b0\u0993","khanari":"\u0996\u09be\u09a8\u09be\u09b0\u0987","khanare":"\u0996\u09be\u09a8\u09be\u09b0\u09c7","khanate":"\u0996\u09be\u09a8\u09be\u09a4\u09c7","khanayo":"\u0996\u09be\u09a8\u09be\u09df\u0993","khanayi":"\u0996\u09be\u09a8\u09be\u09df\u0987","khanero":"\u0996\u09be\u09a8\u09c7\u09b0\u0993","khaneri":"\u0996\u09be\u09a8\u09c7\u09b0\u0987","khanete":"\u0996\u09be\u09a8\u09c7\u09a4\u09c7","khanike":"\u0996\u09be\u09a8\u09bf\u0995\u09c7","khaniro":"\u0996\u09be\u09a8\u09bf\u09b0\u0993","khaniri":"\u0996\u09be\u09a8\u09bf\u09b0\u0987","khanire":"\u0996\u09be\u09a8\u09bf\u09b0\u09c7","khanite":"\u0996\u09be\u09a8\u09bf\u09a4\u09c7","kulero":"\u0995\u09c1\u09b2\u09c7\u09b0\u0993","kuleri":"\u0995\u09c1\u09b2\u09c7\u09b0\u0987","kulkeo":"\u0995\u09c1\u09b2\u0995\u09c7\u0993","kulkei":"\u0995\u09c1\u09b2\u0995\u09c7\u0987","malake":"\u09ae\u09be\u09b2\u09be\u0995\u09c7","malaro":"\u09ae\u09be\u09b2\u09be\u09b0\u0993","malari":"\u09ae\u09be\u09b2\u09be\u09b0\u0987","malara":"\u09ae\u09be\u09b2\u09be\u09b0\u09be","malate":"\u09ae\u09be\u09b2\u09be\u09a4\u09c7","malayo":"\u09ae\u09be\u09b2\u09be\u09df\u0993","malayi":"\u09ae\u09be\u09b2\u09be\u09df\u0987","mondoli":"\u09ae\u09a3\u09cd\u09a1\u09b2\u09c0","punje":"\u09aa\u09c1\u099e\u09cd\u099c\u09c7","punjoo":"\u09aa\u09c1\u099e\u09cd\u099c\u0993","punjoi":"\u09aa\u09c1\u099e\u09cd\u099c\u0987","rajike":"\u09b0\u09be\u099c\u09bf\u0995\u09c7","rajiro":"\u09b0\u09be\u099c\u09bf\u09b0\u0993","rajiri":"\u09b0\u09be\u099c\u09bf\u09b0\u0987","rajira":"\u09b0\u09be\u099c\u09bf\u09b0\u09be","rajite":"\u09b0\u09be\u099c\u09bf\u09a4\u09c7","shokolero":"\u09b8\u0995\u09b2\u09c7\u09b0\u0993","shokoleri":"\u09b8\u0995\u09b2\u09c7\u09b0\u0987","shokolera":"\u09b8\u0995\u09b2\u09c7\u09b0\u09be","shokolkeo":"\u09b8\u0995\u09b2\u0995\u09c7\u0993","shokolkei":"\u09b8\u0995\u09b2\u0995\u09c7\u0987","shokolreo":"\u09b8\u0995\u09b2\u09b0\u09c7\u0993","shokolrei":"\u09b8\u0995\u09b2\u09b0\u09c7\u0987","shomuheo":"\u09b8\u09ae\u09c2\u09b9\u09c7\u0993","shomuhei":"\u09b8\u09ae\u09c2\u09b9\u09c7\u0987","shomuher":"\u09b8\u09ae\u09c2\u09b9\u09c7\u09b0","shomuhoke":"\u09b8\u09ae\u09c2\u09b9\u0995\u09c7","shomuhore":"\u09b8\u09ae\u09c2\u09b9\u09b0\u09c7","shomuhote":"\u09b8\u09ae\u09c2\u09b9\u09a4\u09c7","sokolero":"\u09b8\u0995\u09b2\u09c7\u09b0\u0993","sokoleri":"\u09b8\u0995\u09b2\u09c7\u09b0\u0987","sokolera":"\u09b8\u0995\u09b2\u09c7\u09b0\u09be","sokolkeo":"\u09b8\u0995\u09b2\u0995\u09c7\u0993","sokolkei":"\u09b8\u0995\u09b2\u0995\u09c7\u0987","sokolreo":"\u09b8\u0995\u09b2\u09b0\u09c7\u0993","sokolrei":"\u09b8\u0995\u09b2\u09b0\u09c7\u0987","somuheo":"\u09b8\u09ae\u09c2\u09b9\u09c7\u0993","somuhei":"\u09b8\u09ae\u09c2\u09b9\u09c7\u0987","somuher":"\u09b8\u09ae\u09c2\u09b9\u09c7\u09b0","somuhoke":"\u09b8\u09ae\u09c2\u09b9\u0995\u09c7","somuhore":"\u09b8\u09ae\u09c2\u09b9\u09b0\u09c7","somuhote":"\u09b8\u09ae\u09c2\u09b9\u09a4\u09c7","biseso":"\u09ac\u09bf\u09b6\u09c7\u09b7\u0993","bisesi":"\u09ac\u09bf\u09b6\u09c7\u09b7\u0987","bishesho":"\u09ac\u09bf\u09b6\u09c7\u09b7\u0993","bisheshi":"\u09ac\u09bf\u09b6\u09c7\u09b7\u0987","jatioo":"\u099c\u09be\u09a4\u09c0\u09df\u0993","jatioi":"\u099c\u09be\u09a4\u09c0\u09df\u0987","jatiyoo":"\u099c\u09be\u09a4\u09c0\u09df\u0993","jatiyoi":"\u099c\u09be\u09a4\u09c0\u09df\u0987","shorup":"\u09b8\u09cd\u09ac\u09b0\u09c2\u09aa","shworup":"\u09b8\u09cd\u09ac\u09b0\u09c2\u09aa","sorup":"\u09b8\u09cd\u09ac\u09b0\u09c2\u09aa","sworup":"\u09b8\u09cd\u09ac\u09b0\u09c2\u09aa","gacake":"\u0997\u09be\u099b\u09be\u0995\u09c7","gacaro":"\u0997\u09be\u099b\u09be\u09b0\u0993","gacari":"\u0997\u09be\u099b\u09be\u09b0\u0987","gacare":"\u0997\u09be\u099b\u09be\u09b0\u09c7","gacate":"\u0997\u09be\u099b\u09be\u09a4\u09c7","gachake":"\u0997\u09be\u099b\u09be\u0995\u09c7","gacharo":"\u0997\u09be\u099b\u09be\u09b0\u0993","gachari":"\u0997\u09be\u099b\u09be\u09b0\u0987","gachare":"\u0997\u09be\u099b\u09be\u09b0\u09c7","gachate":"\u0997\u09be\u099b\u09be\u09a4\u09c7","gachhake":"\u0997\u09be\u099b\u09be\u0995\u09c7","gachharo":"\u0997\u09be\u099b\u09be\u09b0\u0993","gachhari":"\u0997\u09be\u099b\u09be\u09b0\u0987","gachhare":"\u0997\u09be\u099b\u09be\u09b0\u09c7","gachhate":"\u0997\u09be\u099b\u09be\u09a4\u09c7","gachhike":"\u0997\u09be\u099b\u09bf\u0995\u09c7","gachhiro":"\u0997\u09be\u099b\u09bf\u09b0\u0993","gachhiri":"\u0997\u09be\u099b\u09bf\u09b0\u0987","gachhire":"\u0997\u09be\u099b\u09bf\u09b0\u09c7","gachhite":"\u0997\u09be\u099b\u09bf\u09a4\u09c7","gachike":"\u0997\u09be\u099b\u09bf\u0995\u09c7","gachiro":"\u0997\u09be\u099b\u09bf\u09b0\u0993","gachiri":"\u0997\u09be\u099b\u09bf\u09b0\u0987","gachire":"\u0997\u09be\u099b\u09bf\u09b0\u09c7","gachite":"\u0997\u09be\u099b\u09bf\u09a4\u09c7","gacike":"\u0997\u09be\u099b\u09bf\u0995\u09c7","gaciro":"\u0997\u09be\u099b\u09bf\u09b0\u0993","gaciri":"\u0997\u09be\u099b\u09bf\u09b0\u0987","gacire":"\u0997\u09be\u099b\u09bf\u09b0\u09c7","gacite":"\u0997\u09be\u099b\u09bf\u09a4\u09c7","tukero":"\u099f\u09c1\u0995\u09c7\u09b0\u0993","tukeri":"\u099f\u09c1\u0995\u09c7\u09b0\u0987","tukkeo":"\u099f\u09c1\u0995\u0995\u09c7\u0993","tukkei":"\u099f\u09c1\u0995\u0995\u09c7\u0987","tukreo":"\u099f\u09c1\u0995\u09b0\u09c7\u0993","tukrei":"\u099f\u09c1\u0995\u09b0\u09c7\u0987","tukteo":"\u099f\u09c1\u0995\u09a4\u09c7\u0993","tuktei":"\u099f\u09c1\u0995\u09a4\u09c7\u0987","tukuke":"\u099f\u09c1\u0995\u09c1\u0995\u09c7","tukuno":"\u099f\u09c1\u0995\u09c1\u09a8\u0993","tukuni":"\u099f\u09c1\u0995\u09c1\u09a8\u0987","tukune":"\u099f\u09c1\u0995\u09c1\u09a8\u09c7","tukuro":"\u099f\u09c1\u0995\u09c1\u09b0\u0993","tukuri":"\u099f\u09c1\u0995\u09c1\u09b0\u0987","tukure":"\u099f\u09c1\u0995\u09c1\u09b0\u09c7","tukute":"\u099f\u09c1\u0995\u09c1\u09a4\u09c7","gunero":"\u0997\u09c1\u09a3\u09c7\u09b0\u0993","guneri":"\u0997\u09c1\u09a3\u09c7\u09b0\u0987","gunkeo":"\u0997\u09c1\u09a3\u0995\u09c7\u0993","gunkei":"\u0997\u09c1\u09a3\u0995\u09c7\u0987","gunreo":"\u0997\u09c1\u09a3\u09b0\u09c7\u0993","gunrei":"\u0997\u09c1\u09a3\u09b0\u09c7\u0987","darao":"\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","darai":"\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","digereo":"\u09a6\u09bf\u0997\u09c7\u09b0\u09c7\u0993","digerei":"\u09a6\u09bf\u0997\u09c7\u09b0\u09c7\u0987","digeteo":"\u09a6\u09bf\u0997\u09c7\u09a4\u09c7\u0993","digetei":"\u09a6\u09bf\u0997\u09c7\u09a4\u09c7\u0987","dwarao":"\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","dwarai":"\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","gulakeo":"\u0997\u09c1\u09b2\u09be\u0995\u09c7\u0993","gulakei":"\u0997\u09c1\u09b2\u09be\u0995\u09c7\u0987","gulaner":"\u0997\u09c1\u09b2\u09be\u09a8\u09c7\u09b0","gulateo":"\u0997\u09c1\u09b2\u09be\u09a4\u09c7\u0993","gulatei":"\u0997\u09c1\u09b2\u09be\u09a4\u09c7\u0987","gulikeo":"\u0997\u09c1\u09b2\u09bf\u0995\u09c7\u0993","gulikei":"\u0997\u09c1\u09b2\u09bf\u0995\u09c7\u0987","guliteo":"\u0997\u09c1\u09b2\u09bf\u09a4\u09c7\u0993","gulitei":"\u0997\u09c1\u09b2\u09bf\u09a4\u09c7\u0987","gulokeo":"\u0997\u09c1\u09b2\u09cb\u0995\u09c7\u0993","gulokei":"\u0997\u09c1\u09b2\u09cb\u0995\u09c7\u0987","guloteo":"\u0997\u09c1\u09b2\u09cb\u09a4\u09c7\u0993","gulotei":"\u0997\u09c1\u09b2\u09cb\u09a4\u09c7\u0987","korrtrriko":"\u0995\u09b0\u09cd\u09a4\u09c3\u0995\u0993","korrtrriki":"\u0995\u09b0\u09cd\u09a4\u09c3\u0995\u0987","kortriko":"\u0995\u09b0\u09cd\u09a4\u09c3\u0995\u0993","kortriki":"\u0995\u09b0\u09cd\u09a4\u09c3\u0995\u0987","borgero":"\u09ac\u09b0\u09cd\u0997\u09c7\u09b0\u0993","borgeri":"\u09ac\u09b0\u09cd\u0997\u09c7\u09b0\u0987","borgera":"\u09ac\u09b0\u09cd\u0997\u09c7\u09b0\u09be","borgokeo":"\u09ac\u09b0\u09cd\u0997\u0995\u09c7\u0993","borgokei":"\u09ac\u09b0\u09cd\u0997\u0995\u09c7\u0987","borrgero":"\u09ac\u09b0\u09cd\u0997\u09c7\u09b0\u0993","borrgeri":"\u09ac\u09b0\u09cd\u0997\u09c7\u09b0\u0987","borrgera":"\u09ac\u09b0\u09cd\u0997\u09c7\u09b0\u09be","borrgokeo":"\u09ac\u09b0\u09cd\u0997\u0995\u09c7\u0993","borrgokei":"\u09ac\u09b0\u09cd\u0997\u0995\u09c7\u0987","brindeo":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u0993","brindei":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u0987","brinder":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u09b0","brindoke":"\u09ac\u09c3\u09a8\u09cd\u09a6\u0995\u09c7","brindora":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09b0\u09be","brrindeo":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u0993","brrindei":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u0987","brrinder":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u09b0","brrindoke":"\u09ac\u09c3\u09a8\u09cd\u09a6\u0995\u09c7","brrindora":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09b0\u09be","khanakeo":"\u0996\u09be\u09a8\u09be\u0995\u09c7\u0993","khanakei":"\u0996\u09be\u09a8\u09be\u0995\u09c7\u0987","khanareo":"\u0996\u09be\u09a8\u09be\u09b0\u09c7\u0993","khanarei":"\u0996\u09be\u09a8\u09be\u09b0\u09c7\u0987","khanateo":"\u0996\u09be\u09a8\u09be\u09a4\u09c7\u0993","khanatei":"\u0996\u09be\u09a8\u09be\u09a4\u09c7\u0987","khaneteo":"\u0996\u09be\u09a8\u09c7\u09a4\u09c7\u0993","khanetei":"\u0996\u09be\u09a8\u09c7\u09a4\u09c7\u0987","khanikeo":"\u0996\u09be\u09a8\u09bf\u0995\u09c7\u0993","khanikei":"\u0996\u09be\u09a8\u09bf\u0995\u09c7\u0987","khanireo":"\u0996\u09be\u09a8\u09bf\u09b0\u09c7\u0993","khanirei":"\u0996\u09be\u09a8\u09bf\u09b0\u09c7\u0987","khaniteo":"\u0996\u09be\u09a8\u09bf\u09a4\u09c7\u0993","khanitei":"\u0996\u09be\u09a8\u09bf\u09a4\u09c7\u0987","malakeo":"\u09ae\u09be\u09b2\u09be\u0995\u09c7\u0993","malakei":"\u09ae\u09be\u09b2\u09be\u0995\u09c7\u0987","malarao":"\u09ae\u09be\u09b2\u09be\u09b0\u09be\u0993","malarai":"\u09ae\u09be\u09b2\u09be\u09b0\u09be\u0987","malateo":"\u09ae\u09be\u09b2\u09be\u09a4\u09c7\u0993","malatei":"\u09ae\u09be\u09b2\u09be\u09a4\u09c7\u0987","mondolio":"\u09ae\u09a3\u09cd\u09a1\u09b2\u09c0\u0993","mondolii":"\u09ae\u09a3\u09cd\u09a1\u09b2\u09c0\u0987","mondolir":"\u09ae\u09a3\u09cd\u09a1\u09b2\u09c0\u09b0","punjeo":"\u09aa\u09c1\u099e\u09cd\u099c\u09c7\u0993","punjei":"\u09aa\u09c1\u099e\u09cd\u099c\u09c7\u0987","punjer":"\u09aa\u09c1\u099e\u09cd\u099c\u09c7\u09b0","punjoke":"\u09aa\u09c1\u099e\u09cd\u099c\u0995\u09c7","punjora":"\u09aa\u09c1\u099e\u09cd\u099c\u09b0\u09be","punjote":"\u09aa\u09c1\u099e\u09cd\u099c\u09a4\u09c7","rajikeo":"\u09b0\u09be\u099c\u09bf\u0995\u09c7\u0993","rajikei":"\u09b0\u09be\u099c\u09bf\u0995\u09c7\u0987","rajirao":"\u09b0\u09be\u099c\u09bf\u09b0\u09be\u0993","rajirai":"\u09b0\u09be\u099c\u09bf\u09b0\u09be\u0987","rajiteo":"\u09b0\u09be\u099c\u09bf\u09a4\u09c7\u0993","rajitei":"\u09b0\u09be\u099c\u09bf\u09a4\u09c7\u0987","shokolerao":"\u09b8\u0995\u09b2\u09c7\u09b0\u09be\u0993","shokolerai":"\u09b8\u0995\u09b2\u09c7\u09b0\u09be\u0987","shomuhero":"\u09b8\u09ae\u09c2\u09b9\u09c7\u09b0\u0993","shomuheri":"\u09b8\u09ae\u09c2\u09b9\u09c7\u09b0\u0987","shomuhokeo":"\u09b8\u09ae\u09c2\u09b9\u0995\u09c7\u0993","shomuhokei":"\u09b8\u09ae\u09c2\u09b9\u0995\u09c7\u0987","shomuhoreo":"\u09b8\u09ae\u09c2\u09b9\u09b0\u09c7\u0993","shomuhorei":"\u09b8\u09ae\u09c2\u09b9\u09b0\u09c7\u0987","shomuhoteo":"\u09b8\u09ae\u09c2\u09b9\u09a4\u09c7\u0993","shomuhotei":"\u09b8\u09ae\u09c2\u09b9\u09a4\u09c7\u0987","sokolerao":"\u09b8\u0995\u09b2\u09c7\u09b0\u09be\u0993","sokolerai":"\u09b8\u0995\u09b2\u09c7\u09b0\u09be\u0987","somuhero":"\u09b8\u09ae\u09c2\u09b9\u09c7\u09b0\u0993","somuheri":"\u09b8\u09ae\u09c2\u09b9\u09c7\u09b0\u0987","somuhokeo":"\u09b8\u09ae\u09c2\u09b9\u0995\u09c7\u0993","somuhokei":"\u09b8\u09ae\u09c2\u09b9\u0995\u09c7\u0987","somuhoreo":"\u09b8\u09ae\u09c2\u09b9\u09b0\u09c7\u0993","somuhorei":"\u09b8\u09ae\u09c2\u09b9\u09b0\u09c7\u0987","somuhoteo":"\u09b8\u09ae\u09c2\u09b9\u09a4\u09c7\u0993","somuhotei":"\u09b8\u09ae\u09c2\u09b9\u09a4\u09c7\u0987","bishishto":"\u09ac\u09bf\u09b6\u09bf\u09b7\u09cd\u099f","bisisto":"\u09ac\u09bf\u09b6\u09bf\u09b7\u09cd\u099f","shorupo":"\u09b8\u09cd\u09ac\u09b0\u09c2\u09aa\u0993","shorupi":"\u09b8\u09cd\u09ac\u09b0\u09c2\u09aa\u0987","shworupo":"\u09b8\u09cd\u09ac\u09b0\u09c2\u09aa\u0993","shworupi":"\u09b8\u09cd\u09ac\u09b0\u09c2\u09aa\u0987","sorupo":"\u09b8\u09cd\u09ac\u09b0\u09c2\u09aa\u0993","sorupi":"\u09b8\u09cd\u09ac\u09b0\u09c2\u09aa\u0987","sworupo":"\u09b8\u09cd\u09ac\u09b0\u09c2\u09aa\u0993","sworupi":"\u09b8\u09cd\u09ac\u09b0\u09c2\u09aa\u0987","gacakeo":"\u0997\u09be\u099b\u09be\u0995\u09c7\u0993","gacakei":"\u0997\u09be\u099b\u09be\u0995\u09c7\u0987","gacareo":"\u0997\u09be\u099b\u09be\u09b0\u09c7\u0993","gacarei":"\u0997\u09be\u099b\u09be\u09b0\u09c7\u0987","gacateo":"\u0997\u09be\u099b\u09be\u09a4\u09c7\u0993","gacatei":"\u0997\u09be\u099b\u09be\u09a4\u09c7\u0987","gachakeo":"\u0997\u09be\u099b\u09be\u0995\u09c7\u0993","gachakei":"\u0997\u09be\u099b\u09be\u0995\u09c7\u0987","gachareo":"\u0997\u09be\u099b\u09be\u09b0\u09c7\u0993","gacharei":"\u0997\u09be\u099b\u09be\u09b0\u09c7\u0987","gachateo":"\u0997\u09be\u099b\u09be\u09a4\u09c7\u0993","gachatei":"\u0997\u09be\u099b\u09be\u09a4\u09c7\u0987","gachhakeo":"\u0997\u09be\u099b\u09be\u0995\u09c7\u0993","gachhakei":"\u0997\u09be\u099b\u09be\u0995\u09c7\u0987","gachhareo":"\u0997\u09be\u099b\u09be\u09b0\u09c7\u0993","gachharei":"\u0997\u09be\u099b\u09be\u09b0\u09c7\u0987","gachhateo":"\u0997\u09be\u099b\u09be\u09a4\u09c7\u0993","gachhatei":"\u0997\u09be\u099b\u09be\u09a4\u09c7\u0987","gachhikeo":"\u0997\u09be\u099b\u09bf\u0995\u09c7\u0993","gachhikei":"\u0997\u09be\u099b\u09bf\u0995\u09c7\u0987","gachhireo":"\u0997\u09be\u099b\u09bf\u09b0\u09c7\u0993","gachhirei":"\u0997\u09be\u099b\u09bf\u09b0\u09c7\u0987","gachhiteo":"\u0997\u09be\u099b\u09bf\u09a4\u09c7\u0993","gachhitei":"\u0997\u09be\u099b\u09bf\u09a4\u09c7\u0987","gachikeo":"\u0997\u09be\u099b\u09bf\u0995\u09c7\u0993","gachikei":"\u0997\u09be\u099b\u09bf\u0995\u09c7\u0987","gachireo":"\u0997\u09be\u099b\u09bf\u09b0\u09c7\u0993","gachirei":"\u0997\u09be\u099b\u09bf\u09b0\u09c7\u0987","gachiteo":"\u0997\u09be\u099b\u09bf\u09a4\u09c7\u0993","gachitei":"\u0997\u09be\u099b\u09bf\u09a4\u09c7\u0987","gacikeo":"\u0997\u09be\u099b\u09bf\u0995\u09c7\u0993","gacikei":"\u0997\u09be\u099b\u09bf\u0995\u09c7\u0987","gacireo":"\u0997\u09be\u099b\u09bf\u09b0\u09c7\u0993","gacirei":"\u0997\u09be\u099b\u09bf\u09b0\u09c7\u0987","gaciteo":"\u0997\u09be\u099b\u09bf\u09a4\u09c7\u0993","gacitei":"\u0997\u09be\u099b\u09bf\u09a4\u09c7\u0987","tukukeo":"\u099f\u09c1\u0995\u09c1\u0995\u09c7\u0993","tukukei":"\u099f\u09c1\u0995\u09c1\u0995\u09c7\u0987","tukuneo":"\u099f\u09c1\u0995\u09c1\u09a8\u09c7\u0993","tukunei":"\u099f\u09c1\u0995\u09c1\u09a8\u09c7\u0987","tukuner":"\u099f\u09c1\u0995\u09c1\u09a8\u09c7\u09b0","tukunke":"\u099f\u09c1\u0995\u09c1\u09a8\u0995\u09c7","tukunre":"\u099f\u09c1\u0995\u09c1\u09a8\u09b0\u09c7","tukureo":"\u099f\u09c1\u0995\u09c1\u09b0\u09c7\u0993","tukurei":"\u099f\u09c1\u0995\u09c1\u09b0\u09c7\u0987","tukuteo":"\u099f\u09c1\u0995\u09c1\u09a4\u09c7\u0993","tukutei":"\u099f\u09c1\u0995\u09c1\u09a4\u09c7\u0987","gulanero":"\u0997\u09c1\u09b2\u09be\u09a8\u09c7\u09b0\u0993","gulaneri":"\u0997\u09c1\u09b2\u09be\u09a8\u09c7\u09b0\u0987","borgerao":"\u09ac\u09b0\u09cd\u0997\u09c7\u09b0\u09be\u0993","borgerai":"\u09ac\u09b0\u09cd\u0997\u09c7\u09b0\u09be\u0987","borrgerao":"\u09ac\u09b0\u09cd\u0997\u09c7\u09b0\u09be\u0993","borrgerai":"\u09ac\u09b0\u09cd\u0997\u09c7\u09b0\u09be\u0987","brindero":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u09b0\u0993","brinderi":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u09b0\u0987","brindera":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u09b0\u09be","brindokeo":"\u09ac\u09c3\u09a8\u09cd\u09a6\u0995\u09c7\u0993","brindokei":"\u09ac\u09c3\u09a8\u09cd\u09a6\u0995\u09c7\u0987","brindorao":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09b0\u09be\u0993","brindorai":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09b0\u09be\u0987","brrindero":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u09b0\u0993","brrinderi":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u09b0\u0987","brrindera":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u09b0\u09be","brrindokeo":"\u09ac\u09c3\u09a8\u09cd\u09a6\u0995\u09c7\u0993","brrindokei":"\u09ac\u09c3\u09a8\u09cd\u09a6\u0995\u09c7\u0987","brrindorao":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09b0\u09be\u0993","brrindorai":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09b0\u09be\u0987","mondolike":"\u09ae\u09a3\u09cd\u09a1\u09b2\u09c0\u0995\u09c7","mondoliro":"\u09ae\u09a3\u09cd\u09a1\u09b2\u09c0\u09b0\u0993","mondoliri":"\u09ae\u09a3\u09cd\u09a1\u09b2\u09c0\u09b0\u0987","mondolira":"\u09ae\u09a3\u09cd\u09a1\u09b2\u09c0\u09b0\u09be","punjero":"\u09aa\u09c1\u099e\u09cd\u099c\u09c7\u09b0\u0993","punjeri":"\u09aa\u09c1\u099e\u09cd\u099c\u09c7\u09b0\u0987","punjokeo":"\u09aa\u09c1\u099e\u09cd\u099c\u0995\u09c7\u0993","punjokei":"\u09aa\u09c1\u099e\u09cd\u099c\u0995\u09c7\u0987","punjorao":"\u09aa\u09c1\u099e\u09cd\u099c\u09b0\u09be\u0993","punjorai":"\u09aa\u09c1\u099e\u09cd\u099c\u09b0\u09be\u0987","punjoteo":"\u09aa\u09c1\u099e\u09cd\u099c\u09a4\u09c7\u0993","punjotei":"\u09aa\u09c1\u099e\u09cd\u099c\u09a4\u09c7\u0987","bishishtoo":"\u09ac\u09bf\u09b6\u09bf\u09b7\u09cd\u099f\u0993","bishishtoi":"\u09ac\u09bf\u09b6\u09bf\u09b7\u09cd\u099f\u0987","bisistoo":"\u09ac\u09bf\u09b6\u09bf\u09b7\u09cd\u099f\u0993","bisistoi":"\u09ac\u09bf\u09b6\u09bf\u09b7\u09cd\u099f\u0987","tukunero":"\u099f\u09c1\u0995\u09c1\u09a8\u09c7\u09b0\u0993","tukuneri":"\u099f\u09c1\u0995\u09c1\u09a8\u09c7\u09b0\u0987","tukunkeo":"\u099f\u09c1\u0995\u09c1\u09a8\u0995\u09c7\u0993","tukunkei":"\u099f\u09c1\u0995\u09c1\u09a8\u0995\u09c7\u0987","tukunreo":"\u099f\u09c1\u0995\u09c1\u09a8\u09b0\u09c7\u0993","tukunrei":"\u099f\u09c1\u0995\u09c1\u09a8\u09b0\u09c7\u0987","brinderao":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u09b0\u09be\u0993","brinderai":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u09b0\u09be\u0987","brrinderao":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u09b0\u09be\u0993","brrinderai":"\u09ac\u09c3\u09a8\u09cd\u09a6\u09c7\u09b0\u09be\u0987","mondolikeo":"\u09ae\u09a3\u09cd\u09a1\u09b2\u09c0\u0995\u09c7\u0993","mondolikei":"\u09ae\u09a3\u09cd\u09a1\u09b2\u09c0\u0995\u09c7\u0987","mondolirao":"\u09ae\u09a3\u09cd\u09a1\u09b2\u09c0\u09b0\u09be\u0993","mondolirai":"\u09ae\u09a3\u09cd\u09a1\u09b2\u09c0\u09b0\u09be\u0987","shombondhio":"\u09b8\u09ae\u09cd\u09ac\u09a8\u09cd\u09a7\u09c0\u09df","shombondhiyo":"\u09b8\u09ae\u09cd\u09ac\u09a8\u09cd\u09a7\u09c0\u09df","shongkranto":"\u09b8\u0982\u0995\u09cd\u09b0\u09be\u09a8\u09cd\u09a4","shonkanto":"\u09b8\u0982\u0995\u09cd\u09b0\u09be\u09a8\u09cd\u09a4","sombondhio":"\u09b8\u09ae\u09cd\u09ac\u09a8\u09cd\u09a7\u09c0\u09df","sombondhiyo":"\u09b8\u09ae\u09cd\u09ac\u09a8\u09cd\u09a7\u09c0\u09df","songkranto":"\u09b8\u0982\u0995\u09cd\u09b0\u09be\u09a8\u09cd\u09a4","sonkanto":"\u09b8\u0982\u0995\u09cd\u09b0\u09be\u09a8\u09cd\u09a4","tukdara":"\u099f\u09c1\u0995\u09a6\u09cd\u09ac\u09be\u09b0\u09be","tukdwara":"\u099f\u09c1\u0995\u09a6\u09cd\u09ac\u09be\u09b0\u09be","shombondhioo":"\u09b8\u09ae\u09cd\u09ac\u09a8\u09cd\u09a7\u09c0\u09df\u0993","shombondhioi":"\u09b8\u09ae\u09cd\u09ac\u09a8\u09cd\u09a7\u09c0\u09df\u0987","shombondhiyoo":"\u09b8\u09ae\u09cd\u09ac\u09a8\u09cd\u09a7\u09c0\u09df\u0993","shombondhiyoi":"\u09b8\u09ae\u09cd\u09ac\u09a8\u09cd\u09a7\u09c0\u09df\u0987","shongkrantoo":"\u09b8\u0982\u0995\u09cd\u09b0\u09be\u09a8\u09cd\u09a4\u0993","shongkrantoi":"\u09b8\u0982\u0995\u09cd\u09b0\u09be\u09a8\u09cd\u09a4\u0987","shonkantoo":"\u09b8\u0982\u0995\u09cd\u09b0\u09be\u09a8\u09cd\u09a4\u0993","shonkantoi":"\u09b8\u0982\u0995\u09cd\u09b0\u09be\u09a8\u09cd\u09a4\u0987","sombondhioo":"\u09b8\u09ae\u09cd\u09ac\u09a8\u09cd\u09a7\u09c0\u09df\u0993","sombondhioi":"\u09b8\u09ae\u09cd\u09ac\u09a8\u09cd\u09a7\u09c0\u09df\u0987","sombondhiyoo":"\u09b8\u09ae\u09cd\u09ac\u09a8\u09cd\u09a7\u09c0\u09df\u0993","sombondhiyoi":"\u09b8\u09ae\u09cd\u09ac\u09a8\u09cd\u09a7\u09c0\u09df\u0987","songkrantoo":"\u09b8\u0982\u0995\u09cd\u09b0\u09be\u09a8\u09cd\u09a4\u0993","songkrantoi":"\u09b8\u0982\u0995\u09cd\u09b0\u09be\u09a8\u09cd\u09a4\u0987","sonkantoo":"\u09b8\u0982\u0995\u09cd\u09b0\u09be\u09a8\u09cd\u09a4\u0993","sonkantoi":"\u09b8\u0982\u0995\u09cd\u09b0\u09be\u09a8\u09cd\u09a4\u0987","gacadara":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be","gacadwara":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be","gachadara":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be","gachadwara":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be","gachhadara":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be","gachhadwara":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be","gachhidara":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be","gachhidwara":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be","gachidara":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be","gachidwara":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be","gacidara":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be","gacidwara":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be","tukdarao":"\u099f\u09c1\u0995\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","tukdarai":"\u099f\u09c1\u0995\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","tukdwarao":"\u099f\u09c1\u0995\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","tukdwarai":"\u099f\u09c1\u0995\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","tukudara":"\u099f\u09c1\u0995\u09c1\u09a6\u09cd\u09ac\u09be\u09b0\u09be","tukudwara":"\u099f\u09c1\u0995\u09c1\u09a6\u09cd\u09ac\u09be\u09b0\u09be","gacadarao":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","gacadarai":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","gacadwarao":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","gacadwarai":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","gachadarao":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","gachadarai":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","gachadwarao":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","gachadwarai":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","gachhadarao":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","gachhadarai":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","gachhadwarao":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","gachhadwarai":"\u0997\u09be\u099b\u09be\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","gachhidarao":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","gachhidarai":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","gachhidwarao":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","gachhidwarai":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","gachidarao":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","gachidarai":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","gachidwarao":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","gachidwarai":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","gacidarao":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","gacidarai":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","gacidwarao":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","gacidwarai":"\u0997\u09be\u099b\u09bf\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","tukudarao":"\u099f\u09c1\u0995\u09c1\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","tukudarai":"\u099f\u09c1\u0995\u09c1\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","tukudwarao":"\u099f\u09c1\u0995\u09c1\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","tukudwarai":"\u099f\u09c1\u0995\u09c1\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","tukundara":"\u099f\u09c1\u0995\u09c1\u09a8\u09a6\u09cd\u09ac\u09be\u09b0\u09be","tukundwara":"\u099f\u09c1\u0995\u09c1\u09a8\u09a6\u09cd\u09ac\u09be\u09b0\u09be","tukundarao":"\u099f\u09c1\u0995\u09c1\u09a8\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","tukundarai":"\u099f\u09c1\u0995\u09c1\u09a8\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987","tukundwarao":"\u099f\u09c1\u0995\u09c1\u09a8\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0993","tukundwarai":"\u099f\u09c1\u0995\u09c1\u09a8\u09a6\u09cd\u09ac\u09be\u09b0\u09be\u0987"};

function Loadfile () {}

Loadfile.prototype = {
    load_json: function(filePath) {

        var request = new XMLHttpRequest()
        var sentSuccessfully = false;

        request.open('GET', filePath)
        request.onreadystatechange = function(event) {
            if (request.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
                sentSuccessfully = true
            }
            if (request.readyState === XMLHttpRequest.DONE) {
                if (!sentSuccessfully) {
                    return;
                }

                var json = request.responseText
                return JSON.parse(json[0]) || {};
            }
        }
        request.onerror = function(err) {
            this._logger(err, 'Error loading file ')
        }
        request.send();
    }
};

var tables = Loadfile.prototype.load_json(avrodict.json);

function AvroRegex () {}

AvroRegex.prototype = {
    parse: function(input) {
        var fixed = this._fixString(input);
        var output = "";
        for(var cur = 0; cur < fixed.length; ++cur) {
            var start = cur, end = cur + 1, prev = start - 1;
            var matched = false;

            for(var i = 0; i < this.data.patterns.length; ++i) {
                var pattern = this.data.patterns[i];
                end = cur + pattern.find.length;
                if(end <= fixed.length && fixed.substring(start, end) == pattern.find) {
                    prev = start - 1;
                    if(typeof pattern.rules !== 'undefined') {
                        for(var j = 0; j < pattern.rules.length; ++j) {
                            var rule = pattern.rules[j];
                            var replace = true;

                            var chk = 0;
                            for(var k=0; k < rule.matches.length; ++k) {
                                var match = rule.matches[k];

                                if(match.type === "suffix") {
                                    chk = end;
                                } 
                                // Prefix
                                else {
                                    chk = prev;
                                }

                                // Handle Negative
                                if(typeof match.negative === 'undefined') {
                                    match.negative = false;
                                    if(match.scope.charAt(0) === '!') {
                                        match.negative = true;
                                        match.scope = match.scope.substring(1);
                                    }
                                }

                                // Handle empty value
                                if(typeof match.value === 'undefined') match.value = '';

                                // Beginning
                                if(match.scope === "punctuation") {
                                    if(
                                        ! (
                                            ((chk < 0) && (match.type === "prefix")) || 
                                            ((chk >= fixed.length) && (match.type === "suffix")) || 
                                            this._isPunctuation(fixed.charAt(chk))
                                        ) ^ match.negative
                                    ) {
                                        replace = false;
                                        break;
                                    }
                                }
                                // Vowel
                                else if(match.scope === "vowel") {
                                    if(
                                        ! (
                                            (
                                                (chk >= 0 && (match.type === "prefix")) || 
                                                (chk < fixed.length && (match.type === "suffix"))
                                            ) && 
                                            this._isVowel(fixed.charAt(chk))
                                        ) ^ match.negative
                                    ) {
                                        replace = false;
                                        break;
                                    }
                                }
                                // Consonant
                                else if(match.scope === "consonant") {
                                    if(
                                        ! (
                                            (
                                                (chk >= 0 && (match.type === "prefix")) || 
                                                (chk < fixed.length && match.type === ("suffix"))
                                            ) && 
                                            this._isConsonant(fixed.charAt(chk))
                                        ) ^ match.negative
                                    ) {
                                        replace = false;
                                        break;
                                    }
                                }
                                // Exact
                                else if(match.scope === "exact") {
                                    var s, e;
                                    if(match.type === "suffix") {
                                        s = end;
                                        e = end + match.value.length;
                                    } 
                                    // Prefix
                                    else {
                                        s = start - match.value.length;
                                        e = start;
                                    }
                                    if(!this._isExact(match.value, fixed, s, e, match.negative)) {
                                        replace = false;
                                        break;
                                    }
                                }
                            }

                            if(replace) {
                                output += rule.replace + "(্[যবম])?(্?)([ঃঁ]?)";
                                cur = end - 1;
                                matched = true;
                                break;
                            }

                        }
                    }
                    if(matched == true) break;

                    // Default
                    output += pattern.replace + "(্[যবম])?(্?)([ঃঁ]?)";
                    cur = end - 1;
                    matched = true;
                    break;
                }
            }

            if(!matched) {
                output += fixed.charAt(cur);
            }
        }
        return this._convertToUnicodeValue(output);
    },
    
    
    _convertToUnicodeValue: function(input){
        var output = '';
        input = utf8Decode(input);
        
        for (var i = 0; i < input.length; i++){
            var charCode = input.charCodeAt(i);
            if (charCode >= 255){
                output += '\\u0' + charCode.toString(16);
            } else {
                output += input.charAt(i);
            }
        }
        return output;
    },
    
    
    _fixString: function(input) {
        var fixed = '';
        for(var i=0; i < input.length; ++i) {
            var cChar = input.charAt(i);
            if(!this._isIgnore(cChar)) {
                fixed += cChar.toLowerCase();
            }
        }
        return fixed;
    },
    
    
    _isVowel: function(c) {
        return (this.data.vowel.indexOf(c.toLowerCase()) >= 0);
    },
    
    
    _isConsonant: function(c) {
        return (this.data.consonant.indexOf(c.toLowerCase()) >= 0);
    },
    
    
    _isPunctuation: function(c) {
        return (!(this._isVowel(c) || this._isConsonant(c)));
    },
    
    
    _isExact: function(needle, heystack, start, end, not) {
        return ((start >= 0 && end < heystack.length && (heystack.substring(start, end)  === needle)) ^ not);
    },
    
    
    _isIgnore: function(c) {
        return (this.data.ignore.indexOf(c.toLowerCase()) >= 0);
    },
    
    
    data: {
        "patterns":
            [
                {
                    "find":"aa",
                    "replace":"(আ|(য়া)|া|((([অএ]্যা?)|[আএ]|([‍‌]?(্য)?া)|(য়া))((([অএ]্যা?)|[আএ]|([‍‌]?(্য)?া)|(য়া)))?))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"au",
                    "replace":"(ঔ|ৌ(([অএ]্যা?)|[আএ]|([‍‌]?(্য)?া)|(য়া))([উঊুূ]|(য়[ুূ])))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"az",
                    "replace":"((([অএ]্যা?)|[আএ]|([‍‌]?(্য)?া)|(য়া))((জ|য|(জ়)|([‍‌]?্য)))?)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ai",
                    "replace":"(ঐ|ৈ|(([অএ]্যা?)|[আএ]|([‍‌]?(্য)?া)|(য়া))([ইঈিী]|(য়[িী])))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"a",
                    "replace":"(([অএ]্যা?)|[অআএ]|([‍‌]?(্য)?া)|(য়া))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"bdh",
                    "replace":"((ব(্?)(ধ|ঢ|([দড](্?)(হ|ঃ|(হ্‌?)))))|((ব(্?)[দড])(্?)(হ|ঃ|(হ্‌?)))|(ব(্?)[দড](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"bhl",
                    "replace":"(((ভ|(ব(্?)(হ|ঃ|(হ্‌?))))(্?)ল)|(ব(্?)((হ|ঃ|(হ্‌?))(্?)ল))|(ব(্?)(হ|ঃ|(হ্‌?))(্?)ল))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"bh",
                    "replace":"(ভ|(ব(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"bb",
                    "replace":"(ব(্?)ব?)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"bd",
                    "replace":"(ব(্?)[দড])",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"bv",
                    "replace":"(ব?(্?)ভ)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"b",
                    "replace":"ব",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"chchh",
                    "replace":"((চ্ছ)|((চ|ছ|([চছ](্?)(হ|ঃ|(হ্‌?))))(্?)(((চ|ছ|([চছ](্?)(হ|ঃ|(হ্‌?))))(্?)((হ|ঃ|(হ্‌?)))?)|([চছ](্?)((হ|ঃ|(হ্‌?))(্?)(হ|ঃ|(হ্‌?))))|([চছ](্?)(হ|ঃ|(হ্‌?))(্?)(হ|ঃ|(হ্‌?)))))|((চ|ছ|([চছ](্?)(হ|ঃ|(হ্‌?))))(্?)(চ|ছ|([চছ](্?)(হ|ঃ|(হ্‌?))))(্?)(হ|ঃ|(হ্‌?)))|([চছ](্?)(হ|ঃ|(হ্‌?))(্?)[চছ](্?)(হ|ঃ|(হ্‌?))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"cch",
                    "replace":"(([চছ](্?)(চ|ছ|([চছ](্?)(হ|ঃ|(হ্‌?)))))|([চছ](্?)[চছ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"chh",
                    "replace":"(((চ|ছ|([চছ](্?)(হ|ঃ|(হ্‌?))))(্?)((হ|ঃ|(হ্‌?)))?)|([চছ](্?)((হ|ঃ|(হ্‌?))(্?)(হ|ঃ|(হ্‌?))))|([চছ](্?)(হ|ঃ|(হ্‌?))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"cng",
                    "replace":"((চ্ঞ)|([চছ](্?)(ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ)))))|([চছ](্?)[নণঁঙঞং](্?)(গ|(জ্ঞ)))|(([চছ](্?)[নণঁঙঞং])(্?)(গ|(জ্ঞ))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ch",
                    "replace":"(চ|ছ|([চছ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ck",
                    "replace":"(ক|([চছ](্?)ক))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"cc",
                    "replace":"([চছ](্?)[চছ]?)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"cn",
                    "replace":"([চছ](্?)[নণঁঙঞং])",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"c",
                    "replace":"[চছ]",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"dhm",
                    "replace":"((([দড](্?)(গ|(জ্ঞ)))(্?)ম)|([দড](্?)((হ|ঃ|(হ্‌?))(্?)ম))|([দড](্?)(হ|ঃ|(হ্‌?))(্?)ম))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"dhn",
                    "replace":"(((ধ|ঢ|([দড](্?)(হ|ঃ|(হ্‌?))))(্?)[নণঁঙঞং])|([দড](্?)((হ|ঃ|(হ্‌?))(্?)[নণঁঙঞং]))|([দড](্?)(হ|ঃ|(হ্‌?))(্?)[নণঁঙঞং]))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"dbh",
                    "replace":"(([দড](্?)(ভ|(ব(্?)(হ|ঃ|(হ্‌?)))))|(([দড](্?)ব)(্?)(হ|ঃ|(হ্‌?)))|([দড](্?)ব(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ddh",
                    "replace":"(([দড]?(্?)([দড](্?)(গ|(জ্ঞ))))|(([দড](্?)[দড]?)(্?)(হ|ঃ|(হ্‌?)))|([দড](্?)[দড](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"dgh",
                    "replace":"(([দড](্?)(ঘ|((গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?)))))|(([দড](্?)(গ|(জ্ঞ)))(্?)(হ|ঃ|(হ্‌?)))|([দড](্?)(গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"db",
                    "replace":"([দড](্?)ব)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"dd",
                    "replace":"([দড](্?)[দড]?)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"dg",
                    "replace":"([দড](্?)(গ|(জ্ঞ)))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"dh",
                    "replace":"(ধ|ঢ|([দড](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"d",
                    "replace":"[দড]",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ey",
                    "replace":"(এ|ই|ে|(েই)|(এই)|ঈ|ী|(((এ্যা?)|[এে]|([‍‌]?(্য)া)|(য়ে))(য়|(ইয়)|([‍‌]?্য))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ee",
                    "replace":"(ই|ঈ|ি|ী|(য়েই)|(((এ্যা?)|[এে]|([‍‌]?(্য)া)|(য়ে))((এ্যা?)|[এে]|([‍‌]?(্য)া)|(য়ে))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"e",
                    "replace":"((এ্যা?)|[এে]|([‍‌]?(্য)া)|(য়ে))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ff",
                    "replace":"(ফ(্?)ফ?)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"f",
                    "replace":"ফ",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ggh",
                    "replace":"((((জ্ঞ)|((গ|(জ্ঞ))(্?)((গ|(জ্ঞ)))?))(্?)(হ|ঃ|(হ্‌?)))|((গ|(জ্ঞ))(্?)(ঘ|((গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?)))))|((গ|(জ্ঞ))(্?)(গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"gdh",
                    "replace":"(((গ|(জ্ঞ))(্?)(ধ|ঢ|([দড](্?)(হ|ঃ|(হ্‌?)))))|((গ|(জ্ঞ))(্?)[দড](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ghn",
                    "replace":"(((ঘ|((গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?))))(্?)[নণঁঙঞং])|((গ|(জ্ঞ))(্?)((হ|ঃ|(হ্‌?))(্?)[নণঁঙঞং]))|((গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?))(্?)[নণঁঙঞং]))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"gh",
                    "replace":"(ঘ|((গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"gg",
                    "replace":"((জ্ঞ)|((গ|(জ্ঞ))(্?)((গ|(জ্ঞ)))?))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"g",
                    "replace":"(গ|(জ্ঞ))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"hl",
                    "replace":"((হ|ঃ|(হ্‌?))(্?)ল)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"hh",
                    "replace":"((হ|ঃ|(হ্‌?))(্?)(হ|ঃ|(হ্‌?)))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"hm",
                    "replace":"((হ|ঃ|(হ্‌?))(্?)ম)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"hn",
                    "replace":"((হ|ঃ|(হ্‌?))(্?)[নণঁঙঞং])",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"h",
                    "replace":"(হ|ঃ|(হ্‌?))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ia",
                    "replace":"((ঞা)|(([ইঈিী]|(য়[িী]))(([অএ]্যা?)|[আএ]|([‍‌]?(্য)?া)|(য়া))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"i",
                    "replace":"([ইঈিী]|(য়[িী]))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"jng",
                    "replace":"((জ্ঞ)|(([জয]|(জ়))(্?)(ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ)))))|(([জয]|(জ়))(্?)[নণঁঙঞং](্?)(গ|(জ্ঞ))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"jjh",
                    "replace":"(((([জয]|(জ়)))?(্?)(ঝ|(([জয]|(জ়))(্?)(হ|ঃ|(হ্‌?)))))|(হ্য)|(((হ্য)|(([জয]|(জ়))(্?)(([জয]|(জ়)))?))(্?)(হ|ঃ|(হ্‌?)))|(([জয]|(জ়))(্?)([জয]|(জ়))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"jj",
                    "replace":"((হ্য)|(([জয]|(জ়))(্?)(([জয]|(জ়)))?))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"jh",
                    "replace":"(ঝ|(([জয]|(জ়))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"j",
                    "replace":"([জয]|(জ়))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"kshm",
                    "replace":"((((ক(্?)(স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?)))))|((ক(্?)[সশষ])(্?)(হ|ঃ|(হ্‌?)))|(ক(্?)[সশষ](্?)(হ|ঃ|(হ্‌?))))(্?)ম)|(ক(্?)(((স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?))))(্?)ম)|([সশষ](্?)((হ|ঃ|(হ্‌?))(্?)ম))|([সশষ](্?)(হ|ঃ|(হ্‌?))(্?)ম)))|((ক(্?)[সশষ])(্?)((হ|ঃ|(হ্‌?))(্?)ম))|(ক(্?)(স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?))))(্?)ম)|(ক(্?)[সশষ](্?)(হ|ঃ|(হ্‌?))(্?)ম))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"kkhm",
                    "replace":"((((ক্ষ)|((ক(্?)ক?)(্?)(হ|ঃ|(হ্‌?)))|(ক?(্?)(খ|(ক্ষ)|(ক(্?)(হ|ঃ|(হ্‌?)))))|(ক(্?)ক(্?)(হ|ঃ|(হ্‌?))))(্?)ম)|((ক(্?)ক?)(্?)((হ|ঃ|(হ্‌?))(্?)ম))|(ক(্?)ক(্?)(হ|ঃ|(হ্‌?))(্?)ম)|(ক(্?)(খ|(ক্ষ)|(ক(্?)(হ|ঃ|(হ্‌?))))(্?)ম))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"kshn",
                    "replace":"((((ক(্?)(স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?)))))|((ক(্?)[সশষ])(্?)(হ|ঃ|(হ্‌?)))|(ক(্?)[সশষ](্?)(হ|ঃ|(হ্‌?))))(্?)[নণঁঙঞং])|(ক(্?)(((স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?))))(্?)[নণঁঙঞং])|([সশষ](্?)((হ|ঃ|(হ্‌?))(্?)[নণঁঙঞং]))|([সশষ](্?)(হ|ঃ|(হ্‌?))(্?)[নণঁঙঞং])))|((ক(্?)[সশষ])(্?)((হ|ঃ|(হ্‌?))(্?)[নণঁঙঞং]))|(ক(্?)(স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?))))(্?)[নণঁঙঞং])|(ক(্?)[সশষ](্?)(হ|ঃ|(হ্‌?))(্?)[নণঁঙঞং]))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"kkhn",
                    "replace":"((((ক্ষ)|((ক(্?)ক?)(্?)(হ|ঃ|(হ্‌?)))|(ক?(্?)(খ|(ক্ষ)|(ক(্?)(হ|ঃ|(হ্‌?)))))|(ক(্?)ক(্?)(হ|ঃ|(হ্‌?))))(্?)[নণঁঙঞং])|((ক(্?)ক?)(্?)((হ|ঃ|(হ্‌?))(্?)[নণঁঙঞং]))|(ক(্?)ক(্?)(হ|ঃ|(হ্‌?))(্?)[নণঁঙঞং])|(ক(্?)(খ|(ক্ষ)|(ক(্?)(হ|ঃ|(হ্‌?))))(্?)[নণঁঙঞং]))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ksh",
                    "replace":"((ক(্?)(স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?)))))|((ক(্?)[সশষ])(্?)(হ|ঃ|(হ্‌?)))|(ক(্?)[সশষ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"kkh",
                    "replace":"((ক্ষ)|((ক(্?)ক?)(্?)(হ|ঃ|(হ্‌?)))|(ক?(্?)(খ|(ক্ষ)|(ক(্?)(হ|ঃ|(হ্‌?)))))|(ক(্?)ক(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"kxm",
                    "replace":"((((ক্ষ)|(ক(্?)((ক্স)|(এক্স)|ষ)))(্?)ম)|(ক(্?)(((ক্স)|(এক্স)|ষ)(্?)ম))|(ক(্?)((ক্স)|(এক্স)|ষ)(্?)ম))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"kxn",
                    "replace":"((((ক্ষ)|(ক(্?)((ক্স)|(এক্স)|ষ)))(্?)[নণঁঙঞং])|(ক(্?)(((ক্স)|(এক্স)|ষ)(্?)[নণঁঙঞং]))|(ক(্?)((ক্স)|(এক্স)|ষ)(্?)[নণঁঙঞং]))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"kh",
                    "replace":"(খ|(ক্ষ)|(ক(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"kk",
                    "replace":"(ক(্?)ক?)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ks",
                    "replace":"(ক(্?)[সশষ])",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"kx",
                    "replace":"((ক্ষ)|(ক(্?)((ক্স)|(এক্স)|ষ)))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"k",
                    "replace":"ক",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"lkh",
                    "replace":"((ল(্?)(খ|(ক্ষ)|(ক(্?)(হ|ঃ|(হ্‌?)))))|((ল(্?)ক)(্?)(হ|ঃ|(হ্‌?)))|(ল(্?)ক(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"lgh",
                    "replace":"((ল(্?)(ঘ|((গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?)))))|((ল(্?)(গ|(জ্ঞ)))(্?)(হ|ঃ|(হ্‌?)))|(ল(্?)(গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"lph",
                    "replace":"((ল(্?)(ফ|(প(্?)(হ|ঃ|(হ্‌?)))))|((ল(্?)প)(্?)(হ|ঃ|(হ্‌?)))|(ল(্?)প(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ldh",
                    "replace":"((ল(্?)(ধ|ঢ|([দড](্?)(হ|ঃ|(হ্‌?)))))|((ল(্?)[দড])(্?)(হ|ঃ|(হ্‌?)))|(ল(্?)[দড](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"lbh",
                    "replace":"((ল(্?)(ভ|(ব(্?)(হ|ঃ|(হ্‌?)))))|((ল(্?)ব)(্?)(হ|ঃ|(হ্‌?)))|(ল(্?)ব(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ll",
                    "replace":"((হ্ল)|(ল?(্?)ল)|(ল(্?)ল))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"lk",
                    "replace":"(ল(্?)ক)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"lg",
                    "replace":"(ল(্?)(গ|(জ্ঞ)))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"lp",
                    "replace":"(ল(্?)প)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ld",
                    "replace":"(ল(্?)[দড])",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"lb",
                    "replace":"(ল(্?)ব)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"l",
                    "replace":"ল",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"mbh",
                    "replace":"((ম(্?)(ভ|(ব(্?)(হ|ঃ|(হ্‌?)))))|((ম(্?)ব)(্?)(হ|ঃ|(হ্‌?)))|(ম(্?)ব(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"mph",
                    "replace":"((ম(্?)(ফ|(প(্?)(হ|ঃ|(হ্‌?)))))|((ম(্?)প)(্?)(হ|ঃ|(হ্‌?)))|(ম(্?)প(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"mth",
                    "replace":"((ম(্?)(থ|ঠ|([তটৎ](্?)(হ|ঃ|(হ্‌?)))))|((ম(্?)[তটৎ])(্?)(হ|ঃ|(হ্‌?)))|(ম(্?)[তটৎ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"mm",
                    "replace":"((হ্ম)|(ম(্?)ম?))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"mb",
                    "replace":"(ম(্?)ব)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"mp",
                    "replace":"(ম(্?)প)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"mt",
                    "replace":"(ম(্?)[তটৎ])",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"m",
                    "replace":"ম",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ngksh",
                    "replace":"(((((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)ক)|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)ক))(্?)(স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?)))))|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)ক(্?)(স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?)))))|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)((ক(্?)(স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?)))))|((ক(্?)[সশষ])(্?)(হ|ঃ|(হ্‌?)))|(ক(্?)[সশষ](্?)(হ|ঃ|(হ্‌?)))))|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)(ক(্?)[সশষ])(্?)(হ|ঃ|(হ্‌?)))|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)ক(্?)[সশষ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ngkkh",
                    "replace":"(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)((ক্ষ)|((ক(্?)ক?)(্?)(হ|ঃ|(হ্‌?)))|(ক?(্?)(খ|(ক্ষ)|(ক(্?)(হ|ঃ|(হ্‌?)))))|(ক(্?)ক(্?)(হ|ঃ|(হ্‌?)))))|((((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)ক)|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)ক))(্?)(খ|(ক্ষ)|(ক(্?)(হ|ঃ|(হ্‌?)))))|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)ক(্?)(খ|(ক্ষ)|(ক(্?)(হ|ঃ|(হ্‌?)))))|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)(ক(্?)ক?)(্?)(হ|ঃ|(হ্‌?)))|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)ক(্?)ক(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ngch",
                    "replace":"(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)(চ|ছ|([চছ](্?)(হ|ঃ|(হ্‌?)))))|((((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)[চছ])|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)[চছ]))(্?)(হ|ঃ|(হ্‌?)))|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)[চছ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"nggh",
                    "replace":"(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)(ঘ|((গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?)))))|([নণঁঙঞং](্?)((জ্ঞ)|((গ|(জ্ঞ))(্?)((গ|(জ্ঞ)))?))(্?)(হ|ঃ|(হ্‌?)))|([নণঁঙঞং](্?)((((জ্ঞ)|((গ|(জ্ঞ))(্?)((গ|(জ্ঞ)))?))(্?)(হ|ঃ|(হ্‌?)))|((গ|(জ্ঞ))(্?)(ঘ|((গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?)))))|((গ|(জ্ঞ))(্?)(গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?)))))|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)(গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?)))|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)(গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?)))|(((ঙ্গ)|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)(গ|(জ্ঞ)))|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)(গ|(জ্ঞ))))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ngkx",
                    "replace":"(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)((ক্ষ)|(ক(্?)((ক্স)|(এক্স)|ষ))))|((((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)ক)|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)ক))(্?)((ক্স)|(এক্স)|ষ))|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)((ক্ষ)|(ক(্?)((ক্স)|(এক্স)|ষ))))|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)ক(্?)((ক্স)|(এক্স)|ষ)))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ngjh",
                    "replace":"(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)(ঝ|(([জয]|(জ়))(্?)(হ|ঃ|(হ্‌?)))))|((((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)([জয]|(জ়)))|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)([জয]|(জ়))))(্?)(হ|ঃ|(হ্‌?)))|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)([জয]|(জ়))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ngkh",
                    "replace":"(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)(খ|(ক্ষ)|(ক(্?)(হ|ঃ|(হ্‌?)))))|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)ক(্?)(হ|ঃ|(হ্‌?)))|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)ক(্?)(হ|ঃ|(হ্‌?)))|((((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)ক)|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)ক))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"nsh",
                    "replace":"(([নণঁঙঞং](্?)(স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?)))))|([নণঁঙঞং](্?)[সশষ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ndh",
                    "replace":"(([নণঁঙঞং](্?)(ধ|ঢ|([দড](্?)(হ|ঃ|(হ্‌?)))))|(([নণঁঙঞং](্?)[দড])(্?)(হ|ঃ|(হ্‌?)))|([নণঁঙঞং](্?)[দড](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"nkh",
                    "replace":"(([নণঁঙঞং](্?)(খ|(ক্ষ)|(ক(্?)(হ|ঃ|(হ্‌?)))))|(((ঙ্ক)|([নণঁঙঞং](্?)ক))(্?)(হ|ঃ|(হ্‌?)))|([নণঁঙঞং](্?)ক(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"nth",
                    "replace":"(([নণঁঙঞং](্?)(থ|ঠ|([তটৎ](্?)(হ|ঃ|(হ্‌?)))))|(([নণঁঙঞং](্?)[তটৎ])(্?)(হ|ঃ|(হ্‌?)))|([নণঁঙঞং](্?)[তটৎ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ngj",
                    "replace":"(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)([জয]|(জ়)))|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)([জয]|(জ়))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ngm",
                    "replace":"(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)ম)|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)ম))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ngg",
                    "replace":"((ঙ্গ)|((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)(গ|(জ্ঞ)))|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)(গ|(জ্ঞ))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ngx",
                    "replace":"(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)((ক্স)|(এক্স)|ষ))|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)((ক্স)|(এক্স)|ষ)))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ngk",
                    "replace":"(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)ক)|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)ক))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ngh",
                    "replace":"((ঙ্ঘ)|([নণঁঙঞং](্?)(ঘ|((গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?)))))|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"nch",
                    "replace":"(([নণঁঙঞং](্?)(চ|ছ|([চছ](্?)(হ|ঃ|(হ্‌?)))))|(((ঞ্চ)|([নণঁঙঞং](্?)[চছ]))(্?)(হ|ঃ|(হ্‌?)))|([নণঁঙঞং](্?)[চছ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"njh",
                    "replace":"(([নণঁঙঞং](্?)(ঝ|(([জয]|(জ়))(্?)(হ|ঃ|(হ্‌?)))))|(((ঞ্জ)|([নণঁঙঞং](্?)([জয]|(জ়))))(্?)(হ|ঃ|(হ্‌?)))|([নণঁঙঞং](্?)([জয]|(জ়))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ngc",
                    "replace":"(((ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))(্?)[চছ])|([নণঁঙঞং](্?)(গ|(জ্ঞ))(্?)[চছ]))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"nc",
                    "replace":"((ঞ্চ)|([নণঁঙঞং](্?)[চছ]))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"nn",
                    "replace":"((হ্ণ)|(হ্ন)|([নণঁঙঞং](্?)[নণঁঙঞং]?))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ng",
                    "replace":"(ঙ|ং|ঞ|(ঙ্গ)|([নণঁঙঞং](্?)(গ|(জ্ঞ))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"nk",
                    "replace":"((ঙ্ক)|([নণঁঙঞং](্?)ক))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"nj",
                    "replace":"((ঞ্জ)|([নণঁঙঞং](্?)([জয]|(জ়))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"nd",
                    "replace":"([নণঁঙঞং](্?)[দড])",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"nt",
                    "replace":"([নণঁঙঞং](্?)[তটৎ])",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"n",
                    "replace":"[নণঁঙঞং]",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"oo",
                    "replace":"((([উঊুূ]|(য়[ুূ])))|(([ওোঅ]|(অ্য)|(য়ো?))?([ওোঅ]|(অ্য)|(য়ো?))?))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"oi",
                    "replace":"(ঐ|ৈ|(([ওোঅ]|(অ্য)|(য়ো?))?([ইঈিী]|(য়[িী]))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ou",
                    "replace":"(ঔ|ৌ|(([ওোঅ]|(অ্য)|(য়ো?))?([উঊুূ]|(য়[ুূ]))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"o",
                    "replace":"([ওোঅ]|(অ্য)|(য়ো?))?",
                    "rules":
                    [
                        {
                            "matches":
                            [
                                {
                                    "type":"prefix",
                                    "scope":"punctuation",
                                    "value":"",
                                    "negative":"FALSE"
                                }
                            ],
                            "replace":"([ওোঅ]|(অ্য)|(য়ো?))"
                        }
                    ]
                },
                {
                    "find":"phl",
                    "replace":"(((ফ|(প(্?)(হ|ঃ|(হ্‌?))))(্?)ল)|(প(্?)((হ|ঃ|(হ্‌?))(্?)ল))|(প(্?)(হ|ঃ|(হ্‌?))(্?)ল))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ph",
                    "replace":"(ফ|(প(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"pp",
                    "replace":"(প(্?)প?)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"p",
                    "replace":"প",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"qq",
                    "replace":"(ক(্?)ক?)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"q",
                    "replace":"ক",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"rri",
                    "replace":"(ঋ|ৃ|(([রড়ঢ়]|(হ্র))([রড়ঢ়]|(হ্র))([ইঈিী]|(য়[িী]))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ri",
                    "replace":"(ঋ|ৃ|(হৃ)|(([রড়ঢ়]|(হ্র))([ইঈিী]|(য়[িী]))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"rh",
                    "replace":"((([রড়ঢ়]|(হ্র)))|(([রড়ঢ়]|(হ্র))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"r",
                    "replace":"([রড়ঢ়]|(হ্র))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"shsh",
                    "replace":"((((স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?)))))?(্?)(স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?)))))|([সশষ](্?)(হ|ঃ|(হ্‌?))(্?)[সশষ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ssh",
                    "replace":"(([সশষ]?(্?)(স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?)))))|([সশষ](্?)[সশষ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"shm",
                    "replace":"(((স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?))))(্?)ম)|([সশষ](্?)((হ|ঃ|(হ্‌?))(্?)ম))|([সশষ](্?)(হ|ঃ|(হ্‌?))(্?)ম))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"shn",
                    "replace":"(((স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?))))(্?)[নণঁঙঞং])|([সশষ](্?)((হ|ঃ|(হ্‌?))(্?)[নণঁঙঞং]))|([সশষ](্?)(হ|ঃ|(হ্‌?))(্?)[নণঁঙঞং]))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"ss",
                    "replace":"([সশষ](্?)[সশষ]?)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"sh",
                    "replace":"(স|শ|ষ|([সশষ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"s",
                    "replace":"[সশষ]",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"thth",
                    "replace":"((ত্থ)|(((থ|ঠ|([তটৎ](্?)(হ|ঃ|(হ্‌?)))))?(্?)(থ|ঠ|([তটৎ](্?)(হ|ঃ|(হ্‌?)))))|([তটৎ](্?)(হ|ঃ|(হ্‌?))(্?)[তটৎ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"tth",
                    "replace":"(([তটৎ]?(্?)(থ|ঠ|([তটৎ](্?)(হ|ঃ|(হ্‌?)))))|(([তটৎ](্?)[তটৎ]?)(্?)(হ|ঃ|(হ্‌?)))|([তটৎ](্?)[তটৎ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"t``",
                    "replace":"ৎ",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"tth",
                    "replace":"(([তটৎ]?(্?)(থ|ঠ|([তটৎ](্?)(হ|ঃ|(হ্‌?)))))|(([তটৎ](্?)[তটৎ]?)(্?)(হ|ঃ|(হ্‌?)))|([তটৎ](্?)[তটৎ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"tt",
                    "replace":"([তটৎ](্?)[তটৎ]?)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"th",
                    "replace":"(থ|ঠ|([তটৎ](্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"t",
                    "replace":"[তটৎ]",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"uu",
                    "replace":"(ঊ|ূ|(([উঊুূ]|(য়[ুূ]))(([উঊুূ]|(য়[ুূ])))?))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"u",
                    "replace":"([উঊুূ]|(য়[ুূ]))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"vv",
                    "replace":"(ভ(্?)ভ?)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"v",
                    "replace":"ভ",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"w",
                    "replace":"(ও|(ওয়)|(্ব))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"xm",
                    "replace":"(((ক্স)|(এক্স)|ষ)(্?)ম)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"xn",
                    "replace":"(((ক্স)|(এক্স)|ষ)(্?)[নণঁঙঞং])",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"x",
                    "replace":"((ক্স)|(এক্স)|ষ)",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"y",
                    "replace":"(য়|(ইয়)|([‍‌]?্য))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"zzh",
                    "replace":"((হ্য)|((জ|য|(জ়)|([‍‌]?্য))(্?)(ঝ|(([জয]|(জ়))(্?)(হ|ঃ|(হ্‌?)))))|(((হ্য)|((জ|য|(জ়)|([‍‌]?্য))(্?)((জ|য|(জ়)|([‍‌]?্য)))?))(্?)(হ|ঃ|(হ্‌?)))|((জ|য|(জ়)|([‍‌]?্য))(্?)(জ|য|(জ়)|([‍‌]?্য))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"zh",
                    "replace":"(ঝ|(([জয]|(জ়))(্?)(হ|ঃ|(হ্‌?))))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"zz",
                    "replace":"((হ্য)|((জ|য|(জ়)|([‍‌]?্য))(্?)((জ|য|(জ়)|([‍‌]?্য)))?))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"z",
                    "replace":"(জ|য|(জ়)|([‍‌]?্য))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"0",
                    "replace":"(০|(0)|(শূন্য))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"1",
                    "replace":"(১|(1)|(এক))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"2",
                    "replace":"(২|(2)|(দুই))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"3",
                    "replace":"(৩|(3)|(তিন))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"4",
                    "replace":"(৪|(4)|(চার))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"5",
                    "replace":"(৫|(5)|(পাঁচ))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"6",
                    "replace":"((6)|৬|(ছয়))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"7",
                    "replace":"(৭|(7)|(সাত))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"8",
                    "replace":"(৮|(8)|(আট))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"9",
                    "replace":"(৯|(9)|(নয়))",
                    "rules":
                    [
                    ]
                },
                {
                    "find":"`",
                    "replace":"",
                    "rules":
                    [
                    ]
                }
            ],
            "vowel":"aeiou",
            "consonant":"bcdfghjklmnpqrstvwxyz",
            "ignore":"|()[]{}^$*+?.~!@#%&-_='\";<>/\\,:`"
    }
};

function DBSearch () {
    this._init();
}

DBSearch.prototype = {
    
    search: function (enText) {
        
        var lmc = enText.toLowerCase().charAt(0); 
        var tableList = [];
        switch (lmc) {
            case 'a':
                tableList = ["a", "aa", "e", "oi", "o", "nya", "y"];
                break;
            case 'b':
                tableList = ["b", "bh"];
                break;
            case 'c':
                tableList = ["c", "ch", "k"];
                break;
            case 'd':
                tableList = ["d", "dh", "dd", "ddh"];
                break;
            case 'e':
                tableList = ["i", "ii", "e", "y"];
                break;
            case 'f':
                tableList = ["ph"];
                break;
            case 'g':
                tableList = ["g", "gh", "j"];
                break;
            case 'h':
                tableList = ["h"];
                break;
            case 'i':
                tableList = ["i", "ii", "y"];
                break;
            case 'j':
                tableList = ["j", "jh", "z"];
                break;
            case 'k':
                tableList = ["k", "kh"];
                break;
            case 'l':
                tableList = ["l"];
                break;
            case 'm':
                tableList = ["h", "m"];
                break;
            case 'n':
                tableList = ["n", "nya", "nga", "nn"];
                break;
            case 'o':
                tableList = ["a", "u", "uu", "oi", "o", "ou", "y"];
                break;
            case 'p':
                tableList = ["p", "ph"];
                break;
            case 'q':
                tableList = ["k"];
                break;
            case 'r':
                tableList = ["rri", "h", "r", "rr", "rrh"];
                break;
            case 's':
                tableList = ["s", "sh", "ss"];
                break;
            case 't':
                tableList = ["t", "th", "tt", "tth", "khandatta"];
                break;
            case 'u':
                tableList = ["u", "uu", "y"];
                break;
            case 'v':
                tableList = ["bh"];
                break;
            case 'w':
                tableList = ["o"];
                break;
            case 'x':
                tableList = ["e", "k"];
                break;
            case 'y':
                tableList = ["i", "y"];
                break;
            case 'z':
                tableList = ["h", "j", "jh", "z"];
                break;
            default:
                break;
         }
         
         var pattern = this._regex.parse(enText);
         pattern = '^' + pattern + '$';
         
        var retWords = [];
        
        for(var x in tableList) {
             var table = 'w_' + tableList[x];
             retWords = retWords.concat(this._searchInArray(pattern, tables[table]));
         }
        
        return retWords;
    },
    
    
    _searchInArray: function(pattern, wArray){
        var retWords = [];
        var word = '';
        var re = new RegExp(pattern);

        for (var w in wArray){
            word = wArray[w];
            if (re.test(word)){
                retWords.push(word);
            }
        }
        return retWords;
    },


    _printWords: function (enText) {
        var words = this.search(enText);
        for (var w in words){
            print(words[w]);
        }
    },
    
    
    _init: function () {
        this._regex = new AvroRegex();
    }
};

var autocorrectdb =
{
    "#:-S": "#:-S",
    "#-o": "#-o",
    "$-)": "$-)",
    "&": "O",
    "(:|": "(:|",
    "*)": "*)",
    "*-:)": "*-:)",
    ":!!": ":!!",
    ":-\"": ":-\"",
    ":\">": ":\">",
    ":#": ":#",
    ":-#": ":-#",
    ":-$": ":-$",
    ":&": ":&",
    ":-&": ":-&",
    ":(": ":(",
    ":'(": ":'(",
    ":-(": ":-(",
    ":((": ":((",
    ":(:)": ":(:)",
    ":(|)": ":(|)",
    ":)": ":)",
    ":-)": ":-)",
    ":))": ":))",
    ":)]": ":)]",
    ":)~": ":)~",
    ":)>-": ":)>-",
    ":-)>....": ":-)>....",
    ":*": ":*",
    ":-*": ":-*",
    ":\/": ":\/",
    ":-\/": ":-\/",
    ":-?": ":-?",
    ":-??": ":-??",
    ":-@": ":-@",
    ":@)": ":@)",
    ":[": ":[",
    ":\\": ":\\",
    ":]": ":]",
    ":^)": ":^)",
    ":^o": ":^o",
    ":{": ":{",
    ":|": ":|",
    ":}": ":}",
    ":\u00ed(": ":\u00ed(",
    ":<": ":<",
    ":-<": ":-<",
    ":>": ":>",
    ":3": ":3",
    ":-9": ":-9",
    ":ar!": ":ar!",
    ":b": ":b",
    ":-b": ":-b",
    ":-B": ":-B",
    ":-bd": ":-bd",
    ":bz": ":bz",
    ":c": ":c",
    ":-c": ":-c",
    ":c)": ":c)",
    ":D": ":D",
    ":-D": ":-D",
    ":-h": ":-h",
    ":-j": ":-j",
    ":-L": ":-L",
    ":O": ":O",
    ":-O": ":-O",
    ":o)": ":o)",
    ":O)": ":O)",
    ":o3": ":o3",
    ":p": ":p",
    ":-p": ":-p",
    ":P": ":P",
    ":-P": ":-P",
    ":-q": ":-q",
    ":S": ":S",
    ":-S": ":-S",
    ":-SS": ":-SS",
    ":-t": ":-t",
    ":u": ":u",
    ":-w": ":-w",
    ":x": ":x",
    ":X": ":X",
    ":-X": ":-X",
    ";(": ";(",
    ";)": ";)",
    ";-)": ";-)",
    ";))": ";))",
    ";*(": ";*(",
    ";]": ";]",
    ";^)": ";^)",
    ";D": ";D",
    ";o_o;": ";o_o;",
    "@}-;-'---": "@}-;-'---",
    "[:|]": "[:|]",
    "[-O<": "[-O<",
    "[-X": "[-X",
    "\\,,\/": "\\,,\/",
    "\\:D\/": "\\:D\/",
    "\\m\/": "\\m\/",
    "\\o\/": "\\o\/",
    "^#(^": "^#(^",
    "^:)^": "^:)^",
    "~:>": "~:>",
    "~O)": "~O)",
    "~X(": "~X(",
    "<):)": "<):)",
    "<\/3": "<\/3",
    "<:-P": "<:-P",
    "<=3": "<=3",
    "<=8": "<=8",
    "<3": "<3",
    "<333": "<333",
    "=:)": "=:)",
    "=3": "=3",
    "=D": "=D",
    "=D>": "=D>",
    "=p": "=p",
    "=P": "=P",
    "=P~": "=P~",
    ">.<": ">.<",
    ">:(": ">:(",
    ">:-(": ">:-(",
    ">:)": ">:)",
    ">:-)": ">:-)",
    ">:\/": ">:\/",
    ">:D<": ">:D<",
    ">:P": ">:P",
    ">;)": ">;)",
    "0:3": "0:3",
    "0_o": "0_o",
    "0-0": "0-0",
    "0w0": "0w0",
    "10th": "10m",
    "1st": "1m",
    "2nd": "2y",
    "3:-O": "3:-O",
    "3rd": "3y",
    "4th": "4rrth",
    "5th": "5m",
    "6th": "6ShTh",
    "7th": "7m",
    "8)": "8)",
    "8-)": "8-)",
    "8-|": "8-|",
    "8-}": "8-}",
    "8->": "8->",
    "8D": "8D",
    "8O": "8O",
    "8th": "8m",
    "8-X": "8-X",
    "9th": "9m",
    "abdomen": "oZabDOmen",
    "academy": "oZakaDemi",
    "access": "oZaxes",
    "account": "oZakaunT",
    "acer": "esar",
    "acharya": "acarrz",
    "action": "oZakSan",
    "active": "oZakTiv",
    "activity": "oZakTiviTi",
    "adapter": "oZaDapTar",
    "add": "oZaD",
    "aditya": "adity",
    "adjust": "oZaDjasT",
    "adobe": "oZaDOb",
    "adrita": "adrrita",
    "adsense": "aZDsens",
    "advertisement": "oZaDvarrTaijmenT",
    "adwords": "oZaD`OyarrDs",
    "aeroplane": "erOplen",
    "africa": "afrika",
    "aids": "eiDs",
    "aingoto": "ain`goto",
    "ainjIbI": "ain`jIbI",
    "ainkanun": "ain`kanun",
    "ainmafik": "ain`mafik",
    "ainmaphik": "ain`maphik",
    "ainmontrI": "ain`montrI",
    "ainmontroNaloy": "ain`montroNaloy",
    "ainmote": "ain`mote",
    "ainmoto": "ain`moto",
    "ainsocib": "ain`socib",
    "ainsommoto": "ain`sommoto",
    "ainsongoto": "ain`songoto",
    "airport": "eyarpOrrT",
    "airtel": "eyarTel",
    "airway": "ear`we",
    "airways": "ear`wej",
    "akbar": "akbor",
    "akkelguRum": "akkel`guRum",
    "aktel": "ekoTel",
    "alarm": "aZlarrm",
    "album": "oZal`bam",
    "algOch": "al`gOch",
    "almari": "al`mari",
    "alOkmala": "alOk`mala",
    "alOkmoy": "alOk`moy",
    "alOksojja": "alOk`sojja",
    "alOksongket": "alOk`songket",
    "alOkstombho": "alOk`stombho",
    "alOkstomvo": "alOk`stomvo",
    "alphabet": "oZalfabeT",
    "alpin": "al`pin",
    "alt": "olT",
    "amartya": "omorrtyo",
    "america": "amerika",
    "american": "amerikan",
    "amrita": "omrrita",
    "ananda": "anond",
    "anandabajar": "anondobajar",
    "anandabazar": "anondobajar",
    "anatomy": "oZanaTomi",
    "and": "oZanD",
    "andhra": "ondhro",
    "angle": "oZangel",
    "anirban": "onirrbaN",
    "aniruddha": "oniruddho",
    "antenna": "oZanTena",
    "antivirus": "aZnTivairas",
    "anurima": "oNurima",
    "apna": "ap`na",
    "apnaapni": "ap`naap`ni",
    "aponkar": "apon`kar",
    "app": "oZap",
    "apple": "oZapol",
    "application": "oZaplikeSan",
    "apply": "aZplai",
    "april": "epril",
    "arab": "arb",
    "arabia": "arob",
    "archive": "arrkaiv",
    "argentina": "arrjenTina",
    "army": "arrmi",
    "article": "arrTikel",
    "artist": "arrTisT",
    "asbenna": "asben`na",
    "asenni": "asen`ni",
    "ashraful": "ash`raful",
    "asia": "eSia",
    "aslam": "as`lam",
    "asle": "as`le",
    "aslen": "as`len",
    "asli": "as`li",
    "asma": "as`ma",
    "asman": "as`man",
    "asmanI": "as`manI",
    "assistant": "oZasisTyanT",
    "association": "oZasOsiyeSan",
    "atm": "eTiem",
    "audio": "oDiO",
    "auditorium": "oDiTOriam",
    "august": "ogasT",
    "australia": "osTreliya",
    "authority": "othoriTi",
    "auto": "oTO",
    "automatic": "oTOmeTik",
    "automobile": "oTOmObail",
    "autopsy": "oTOpsi",
    "avast": "oZavasT",
    "avenue": "oZavenyu",
    "avro": "ovro",
    "avroo": "ovroO",
    "b-(": "b-(",
    "B(": "B(",
    "B)": "B)",
    "B-)": "B-)",
    "babohar": "bybohar",
    "back": "byak",
    "background": "byakgraunD",
    "backspace": "byak`spes",
    "backup": "byak`ap",
    "badminton": "byaDminTon",
    "baksongzom": "bak`songzom",
    "baksongzomI": "bak`songzomI",
    "baksorrboswo": "bak`sorrboswo",
    "ballot": "byaloT",
    "ballygunge": "baligonj",
    "bamfront": "bam`fronT",
    "bampash": "bam`pash",
    "banasree": "bonSrI",
    "banerjee": "byanarrji",
    "bank": "byangk",
    "baseball": "bes,,bol",
    "basu": "bosu",
    "basundhara": "bosundhora",
    "battery": "byaTari",
    "beat": "biT",
    "begum": "begom",
    "bengal": "bengol",
    "bengali": "bengoli",
    "bharat": "bharot",
    "bhattacharya": "voTTacarrz",
    "bhowmik": "vOUmik",
    "bicycle": "baisaikel",
    "bidyut": "bidyut``",
    "bikkhato": "bikhyato",
    "bill": "bil",
    "biochemistry": "bayOkemisTri",
    "biology": "bayOlji",
    "birla": "biRla",
    "birthday": "barrthDe",
    "bismilla": "bis`milla",
    "bismillah": "bis`millah",
    "bismillahir": "bis`millahir",
    "bit": "biT",
    "blackberry": "blyakberi",
    "bloc": "blok",
    "block": "blok",
    "blogger": "blogar",
    "blouse": "blauj",
    "blue": "blu",
    "bluetooth": "bluTuth",
    "board": "bOrrD",
    "bodmaish": "bod`maish",
    "bodmaishi": "bod`maishi",
    "bodmash": "bod`mash",
    "bodmashi": "bod`mashi",
    "bodmayeshi": "bod`mayeshi",
    "bodmejaj": "bod`mejaj",
    "bodmejajI": "bod`mejajI",
    "bodrag": "bod`rag",
    "bodragI": "bod`ragI",
    "bodrul": "bod`rul",
    "bogra": "boguRa",
    "bolbona": "bol`bona",
    "bolenni": "bolen`ni",
    "bollywood": "boliuD",
    "bonna": "bonya",
    "boolean": "bulian",
    "bosenni": "bosen`ni",
    "botany": "bOTani",
    "brake": "brek",
    "brazil": "brajil",
    "brb": "ekTu pore aschi",
    "break": "brek",
    "britain": "briTen",
    "british": "briTiS",
    "britney": "briTni",
    "broadband": "broDbyanD",
    "browser": "braujar",
    "brush": "brash",
    "bsc": "bi`es`si",
    "btv": "biTivi",
    "buddha": "buddho",
    "buddhadeb": "buddhodeb",
    "building": "bilDing",
    "bulb": "balb",
    "bullet": "buleT",
    "bus": "bas",
    "business": "bijnes",
    "button": "baTon",
    "buzz": "baj",
    "byarrtho": "by`rrtho",
    "byay": "by`Y",
    "byrrth": "by`rrth",
    "byrrthta": "by`rrthta",
    "byrrthtay": "by`rrthtay",
    "byte": "baiT",
    "byy": "by`Y",
    "C:": "C:",
    "cable": "keb,,l",
    "cadre": "kyaDar",
    "cake": "kek",
    "cakladar": "cak`ladar",
    "cakranI": "cak`ranI",
    "cakri": "cak`ri",
    "cakribakri": "cak`ribak`ri",
    "cakri-bakri": "cak`ri-bak`ri",
    "cakrihIn": "cak`rihIn",
    "calculator": "kyal`kuleTor",
    "calcutta": "kyal`kaTa",
    "calendar": "kyalenDar",
    "calkata": "kol`kata",
    "calkumRa": "cal`kumRa",
    "calkumRO": "cal`kumRO",
    "call": "kol",
    "camera": "kyamera",
    "campus": "kyampas",
    "canada": "kanaDa",
    "cancel": "kyan`sel",
    "canon": "kyanon",
    "canvas": "kyanvas",
    "capacity": "kyapasiTi",
    "capgeminee": "kyapjemini",
    "capisna": "capis`na",
    "capisne": "capis`ne",
    "capital": "kyapiTal",
    "caplam": "cap`lam",
    "caple": "cap`le",
    "caplei": "cap`lei",
    "caplen": "cap`len",
    "caplo": "cap`lo",
    "caplO": "cap`lO",
    "caps": "kyap,,s",
    "captam": "cap`tam",
    "capte": "cap`te",
    "capten": "cap`ten",
    "capti": "cap`ti",
    "captis": "cap`tis",
    "capture": "kyapcar",
    "card": "karrD",
    "cargo": "karrgO",
    "carrier": "kyariyar",
    "carry": "kyari",
    "cartoon": "karrTun",
    "cassette": "kyaseT",
    "castro": "kastrO",
    "catalog": "kyaTalog",
    "catalogue": "kyaTalog",
    "cd": "siDi",
    "cell": "sel",
    "cent": "senT",
    "century": "sencuri",
    "certificate": "sarrTifikeT",
    "certification": "sarrTifikeSan",
    "chair": "ceyar",
    "chairman": "ceyarmyan",
    "chalk": "cok",
    "chamber": "cembar",
    "chandan": "condon",
    "channel": "cyanel",
    "character": "kyarekTar",
    "charge": "carrj",
    "charger": "carrjar",
    "chatterjee": "cyaTarrji",
    "checkpost": "cekpOsT",
    "check-post": "cekpOsT",
    "chemical": "kemikyal",
    "chemistry": "kemisTri",
    "chennai": "cennai",
    "chicken": "ciken",
    "china": "cayna",
    "chinese": "cainIj",
    "chittagong": "cTrgram",
    "chokkagoj": "chok`kagoj",
    "chokkaTa": "chok`kaTa",
    "chokkaTO": "chok",
    "chokkaTun": "chok",
    "chrome": "krOm",
    "cikmik": "cik`mik",
    "cikmike": "cik`mike",
    "cimney": "cim`ni",
    "cinema": "sinema",
    "circle": "sarrkel",
    "circular": "sarrkular",
    "circus": "sarrkas",
    "city": "siTi",
    "citycell": "siTisel",
    "civil": "sivil",
    "class": "klas",
    "clear": "kliyar",
    "click": "klik",
    "clip": "klip",
    "clipboard": "klipbOrrD",
    "close": "klOj",
    "close-up": "klOs-ap",
    "club": "klab",
    "cm": "semi.`",
    "coach": "kOc",
    "coal": "kOl",
    "code": "kOD",
    "coin": "koyen",
    "college": "kolej",
    "comilla": "kumilla",
    "comment": "komenT",
    "commerce": "komarrs",
    "commercial": "komarrshial",
    "commission": "komish`n",
    "committee": "komiTi",
    "community": "komiuniTi",
    "compaq": "kom`pyak",
    "complain": "kom`plein",
    "computer": "kompiuTar",
    "computing": "kompiuTing",
    "conductor": "konDakTor",
    "conference": "konfarens",
    "configuration": "konfigareshon",
    "congress": "kong`gres",
    "consortium": "konsorrTiam",
    "control": "konTrOl",
    "convert": "konvarrT",
    "converter": "konvarrTar",
    "cookie": "kuki",
    "copy": "kpi",
    "copyright": "kpiraiT",
    "correct": "karekT",
    "council": "kaunsil",
    "courier": "kZuriyar",
    "court": "kOrrT",
    "courtship": "kOrrTSip",
    "coxsbajar": "koxbajar",
    "cpi": "sipi`ai",
    "cpm": "sipiem",
    "crack": "kryak",
    "cream": "krim",
    "credit": "kreDiT",
    "crest": "kresT",
    "cricket": "krikeT",
    "cricketer": "krikeTar",
    "crime": "kraim",
    "criminal": "kriminal",
    "cross": "kros",
    "crystal": "krisTal",
    "css": "sies`es",
    "cuba": "kiuba",
    "current": "karenT",
    "cursor": "karrsor",
    "custom": "kasTm",
    "cycle": "saikel",
    "d'-'": "d'-'",
    "D:": "D:",
    "d:-)": "d:-)",
    "D:<": "D:<",
    "D-:<": "D-:<",
    "D;": "D;",
    "d'_'": "d'_'",
    "d'_'b": "d'_'b",
    "D<": "D<",
    "D=": "D=",
    "D8": "D8",
    "dairy": "Deyari",
    "darjeeling": "darrjiling",
    "dashboard": "DyaSbOrrD",
    "d'-'b": "d'-'b",
    "dead": "DeD",
    "debbhokti": "deb`bhokti",
    "debbhokto": "deb`bhokto",
    "debit": "DebiT",
    "debug": "Dibag",
    "december": "Disembor",
    "default": "DifolT",
    "define": "Difain",
    "definite": "DefiniT",
    "definitely": "DefineTli",
    "definition": "DefineSan",
    "defragment": "Difryag`menT",
    "defragmenter": "Difryag`menTar",
    "degree": "Digri",
    "delete": "DiliT",
    "delhi": "dilli",
    "delivery": "Delivari",
    "dell": "Del",
    "dentist": "DenTisT",
    "design": "Dijain",
    "designer": "Dijainar",
    "desktop": "DeksTp",
    "detective": "DiTekTiv",
    "developar": "Developar",
    "developer": "Developar",
    "development": "DevelopmenT",
    "device": "Divais",
    "dhaka": "Dhaka",
    "dhUmpan": "dhUm`pan",
    "dhUmpayI": "dhUm`payI",
    "dialog": "Daylog",
    "dialogue": "Daylog",
    "diamond": "DaymonD",
    "diary": "Dayeri",
    "dictionary": "Dik`shonarI",
    "diesel": "Dijel",
    "digicam": "Dijikyam",
    "digit": "DijiT",
    "digital": "DijiTal",
    "dingoto": "din`goto",
    "dinkal": "din`kal",
    "dinman": "din`man",
    "dinmane": "din`mane",
    "dinmojur": "din`mojur",
    "dinner": "Dinar",
    "diplay": "Disople",
    "director": "DirekTor",
    "directx": "DirekT-x",
    "disk": "Disk",
    "display": "Dis`ple",
    "dissection": "DisekSan",
    "dj": "Dije",
    "djuice": "Dijyus",
    "doctor": "Daktar",
    "document": "DokumenT",
    "documents": "DokumenTs",
    "Dogmog": "Dog`mog",
    "dOkandar": "dOkan`dar",
    "dOkandari": "dOkan`dari",
    "dOkla": "dOk`la",
    "dollar": "Dolar",
    "domain": "DOmein",
    "dongle": "Dongol",
    "doshombar": "doshom`bar",
    "doSombar": "doSom`bar",
    "download": "DaunlOD",
    "dr.": "dr.",
    "Dr.": "Dr.",
    "DR.": "DR.",
    "draft": "Draf,,T",
    "drawing": "Droying",
    "dreamweaver": "Drim`wevar",
    "drive": "Draiv",
    "driver": "Draivar",
    "drug": "Drag",
    "dur": "dUr",
    "durga": "durrga",
    "dutch": "Dac",
    "dutt": "dotto",
    "dutta": "dotto",
    "dvd": "DiviDi",
    "DX": "DX",
    "earth": "arrth",
    "east": "isT",
    "easy": "iji",
    "edit": "eDiT",
    "edition": "eDishon",
    "editor": "eDiTor",
    "eid": "Id",
    "einstein": "ainsTain",
    "ekhonkar": "ekhon`kar",
    "ekkal": "ek`kal",
    "ekkalIn": "ek`kalIn",
    "ekkendrIyo": "ek`kendrIyo",
    "ekkotha": "ek`kotha",
    "ekla": "ek`la",
    "ekmatra": "ek`matra",
    "ekmatro": "ek`matro",
    "ekmatrrik": "ek`matrrik",
    "ekmon": "ek`mon",
    "ekmona": "ek`mona",
    "ekmot": "ek`mot",
    "ekmotalombI": "ek`motalombI",
    "ekmukh": "ek`mukh",
    "ekmukhI": "ek`mukhI",
    "ekmukhIkoroN": "ek`mukhIkoroN",
    "ekmukhO": "ek`mukhO",
    "ekrob": "ek`rob",
    "ekrOkha": "ek`rOkha",
    "ekrokom": "ek`rokom",
    "ekrokombhabe": "ek`rokom`bhabe",
    "ekrokomvabe": "ek`rokom`vabe",
    "ekrotti": "ek`rotti",
    "ekrUp": "ek`rUp",
    "eksathe": "ek`sathe",
    "eksonge": "ek`songe",
    "eksthan": "ek`sthan",
    "ekTa": "ek`Ta",
    "ekTaka": "ek`Taka",
    "ektal": "ek`tal",
    "ektala": "ek`tala",
    "ekTana": "ek`Tana",
    "ekTane": "ek`Tane",
    "ekTao": "ek`Tao",
    "ektara": "ek`tara",
    "ekTi": "ek`Ti",
    "ektil": "ek`til",
    "ektola": "ek`tola",
    "ektolay": "ek`tolay",
    "ektomo": "ek`tomo",
    "ektontrI": "ek`tontrI",
    "ektontro": "ek`tontro",
    "ektoro": "ek`toro",
    "ektorofa": "ek`torofa",
    "ektoropha": "ek`toropha",
    "ekTu": "ek`Tu",
    "ekTuk": "ek`Tuk",
    "ekTuku": "ek`Tuku",
    "election": "ilekSan",
    "electric": "ilekTrik",
    "electrical": "ilekTrikyal",
    "electricity": "ilekTrisiTi",
    "electronic": "ilekTronik",
    "electronics": "ilekTroniks",
    "email": "imeil",
    "e-mail": "i-mel",
    "emirates": "emireT,,s",
    "emni": "em`ni",
    "emnikore": "em`nikore",
    "emnitoro": "em`nitoro",
    "emnivabe": "em`nivabe",
    "emonki": "emon`ki",
    "emonTa": "emon`Ta",
    "emonTi": "emon`Ti",
    "emontoro": "emon`toro",
    "empire": "empayar",
    "encoding": "en`kODing",
    "end": "enD",
    "engine": "injin",
    "engineer": "injiniyar",
    "engineering": "injiniyaring",
    "england": "inglyanD",
    "english": "inglish",
    "enrique": "en`rik",
    "enter": "enTar",
    "entrance": "enTrans",
    "entries": "enTrij,,",
    "entry": "enTri",
    "epsiode": "episOD",
    "epson": "ep`son",
    "erricson": "erik`san",
    "etc": "ityadi",
    "etyadi": "ityadi",
    "euro": "iurO",
    "europe": "iurOp",
    "event": "ivenT",
    "everest": "evaresT",
    "excel": "exel",
    "exchange": "xcenj",
    "exercise": "exarsaij",
    "explorer": "explOrar",
    "express": "xpres",
    "extension": "xTensan",
    "fa^ktal": "fa^k`tal",
    "facebook": "feisbuk",
    "fantasy": "fyanTasi",
    "fashion": "fyashan",
    "father": "fadar",
    "fatna": "fat`na",
    "february": "februarI",
    "fedora": "feDOra",
    "feed": "feeD",
    "felbe": "fel`be",
    "felben": "fel`ben",
    "felbi": "fel`bi",
    "felbo": "fel`bo",
    "fellam": "fel`lam",
    "felle": "fel`le",
    "fellen": "fel`len",
    "felleo": "fel`leo",
    "felli": "fel`li",
    "fello": "fel`lo",
    "feynman": "fain`myan",
    "fiction": "fikSan",
    "file": "fail",
    "filter": "filTar",
    "final": "fainal",
    "finance": "fainans",
    "find": "fainD",
    "fine": "fain",
    "finki": "fin`ki",
    "firefox": "fayarfox",
    "firenni": "firen`ni",
    "firewire": "fayar`war",
    "fitna": "fit`na",
    "fixed": "fixD",
    "flash": "flyaS",
    "flickr": "flik,,r",
    "floppy": "flopi",
    "flyover": "flaiOvar",
    "folder": "fOlDar",
    "footage": "fuTej",
    "football": "fuTbol",
    "forensic": "forensik",
    "form": "forrm",
    "format": "formyaT",
    "forum": "fOram",
    "forward": "for`warrD",
    "fossil": "fosil",
    "fossils": "fosil,,s",
    "foundation": "faunDeshon",
    "fountain": "faunTen",
    "france": "frans",
    "freeware": "freeOyZar",
    "friend": "frenD",
    "front": "fronT",
    "frontpage": "fronTpej",
    "fulbabu": "ful`babu",
    "fulbagan": "ful`bagan",
    "fulkopi": "ful`kopi",
    "fund": "fanD",
    "fuslanO": "fus`lanO",
    "fusle": "fus`le",
    "fusliye": "fus`liye",
    "fuzzy": "faji",
    "galgolpo": "gal`golpo",
    "gallery": "gyalari",
    "galmondo": "gal`mondo",
    "game": "gem",
    "gamla": "gam`la",
    "gandhi": "gandhI",
    "ganesh": "goNeS",
    "ganguly": "ganguli",
    "ganI": "gganI",
    "gargi": "garrgI",
    "gariahat": "goRiahaT",
    "gatarrthe": "ggatarrthe",
    "gates": "geT,,s",
    "gautam": "gOUtom",
    "gb": "jibi",
    "generation": "jenareSon",
    "geography": "jiografi",
    "george": "jorrj",
    "german": "jarrman",
    "germany": "jarrmani",
    "ghagra": "ghag`ra",
    "ghapla": "ghap`la",
    "ghora": "ghORa",
    "ghori": "ghoRi",
    "ghosh": "ghOSh",
    "ghumanni": "ghuman`ni",
    "ghurenni": "ghuren`ni",
    "gilTi": "gil`Ti",
    "girl": "garrl",
    "github": "giT`hab",
    "gland": "glyanD",
    "glass": "glas",
    "global": "glObal",
    "globalisation": "glObalaijeSan",
    "globalization": "glObalaijeSan",
    "gmail": "jimeil",
    "gObre": "gOb`re",
    "gogoncarI": "gogon`carI",
    "gogoncor": "gogon`cor",
    "gogoncumbI": "gogon`cumbI",
    "gogonsporrshI": "gogon`sporrshI",
    "gOlgal": "gOl`gal",
    "gOlmal": "gOl`mal",
    "gOlmele": "gOl`mele",
    "gOlmoric": "gOl`moric",
    "gOlpata": "gOl`pata",
    "gomes": "gOmej",
    "good": "gooD",
    "google": "googol",
    "government": "govorrn`menT",
    "grasnalI": "gras`nalI",
    "great": "greT",
    "greece": "grIs",
    "greenland": "grInlyanD",
    "group": "grup",
    "guard": "garrD",
    "gubre": "gub`re",
    "guharoy": "guhoray",
    "guhathakurata": "guhThakurota",
    "guide": "gaiD",
    "gujrat": "guj`rat",
    "gunda": "gunDa",
    "gynaecology": "gainekOloji",
    "ha^Tenni": "ha^Ten`ni",
    "hack": "hyak",
    "haj": "hoj",
    "hall": "hol",
    "hamla": "ham`la",
    "hanger": "hyaNggar",
    "haora": "haORa",
    "haque": "hok",
    "hard": "harrD",
    "harddisk": "harrDoDisk",
    "hardware": "harrD`OyZar",
    "harmonium": "harmOniam",
    "harry": "hyari",
    "hature": "hatuRe",
    "head": "heD",
    "health": "hel,,th",
    "heart": "harrT",
    "heatsink": "hiTsink",
    "hekmot": "hek`mot",
    "hell": "hel",
    "helper": "helpar",
    "hertz": "harrj",
    "hi-fi": "hai-fai",
    "hifi": "haifai",
    "highfive": "haifaiv",
    "history": "hisTri",
    "hitler": "hiTlar",
    "hmm": "hum",
    "hockey": "hoki",
    "hokkotha": "hok`kotha",
    "hollywood": "holiuD",
    "home": "hOm",
    "hostel": "hOsTel",
    "hotel": "hOTel",
    "hotkey": "hoT-ki",
    "howra": "haORa",
    "howrah": "haORa",
    "hp": "eicpi",
    "html": "eicTiem`el",
    "human": "hiumyan",
    "hyderabad": "hayderabad",
    "hydrojen": "haiDrOjen",
    "hype": "haip",
    "I-)": "I-)",
    "ibm": "aibiem",
    "icon": "aikon",
    "idiot": "iDiyoT",
    "ie": "aii",
    "image": "imej",
    "imageready": "imej`reDi",
    "imageshack": "imejSyak",
    "imambaRi": "imam`baRi",
    "imandar": "iman`dar",
    "imandarI": "iman`darI",
    "imranur": "im`ranur",
    "inch": "inci",
    "inches": "inci",
    "include": "inokluD",
    "indhondata": "indhon`data",
    "indhondatrI": "indhon`datrI",
    "india": "inDia",
    "indian": "inDian",
    "indradeep": "indrodIp",
    "info": "infO",
    "information": "inforrmeSon",
    "infrared": "infrareD",
    "injection": "injekshan",
    "input": "inpuT",
    "install": "insTol",
    "institute": "insiTiuT",
    "insurance": "in`siOrens",
    "insure": "insiOr",
    "interface": "inTarfes",
    "international": "inTarnyashonal",
    "internet": "inTarneT",
    "iphone": "aifOn",
    "ipod": "aipoD",
    "ipad": "aipyaD",
    "plus": "plas",
    "iron": "ayron",
    "islam": "is`lam",
    "island": "ailyanD",
    "italy": "iTali",
    "item": "aiTem",
    "itihaslekhok": "itihas`lekhok",
    "jabe": "zabe",
    "jalpaiguri": "jol`paiguRi",
    "jamrul": "jam`rul",
    "janenna": "janen`na",
    "jantam": "jan`tam",
    "jante": "jan`te",
    "janten": "jan`ten",
    "janti": "jan`ti",
    "janto": "jan`to",
    "january": "januarI",
    "je": "ze",
    "jeans": "jin,,s",
    "jedin": "zedin",
    "jehetu": "zehetu",
    "jekhan": "zekhan",
    "jemon": "zemon",
    "jet": "jeT",
    "jholkacche": "jhol`kacche",
    "jholkacchilo": "jhol`kacchilo",
    "jholkani": "jhol`kani",
    "jholkanO": "jhol`kanO",
    "jholmol": "jhol`mol",
    "jholmole": "jhol`mole",
    "jibon": "jIbon",
    "jodi": "zodi",
    "joint": "joyenT",
    "jokhon": "zokhon",
    "jonno": "jonyo",
    "jOsna": "jZOt``sna",
    "josna": "jZOt``sna",
    "jOsnamoy": "jZOt``snamoy",
    "josnamoy": "jZOt``snamoy",
    "jOsnarat": "jZOt``snarat",
    "josnarat": "jZOt``snarat",
    "jOsnaratri": "jZOt``snaratri",
    "josnaratri": "jZOt``snaratri",
    "journalism": "jarrnalijm",
    "journalist": "jarrnalisT",
    "jukti": "zukti",
    "july": "julai",
    "jyoti": "jyOti",
    "jyotirmoy": "jyOtirrmoy",
    "jyatirmoy": "jyOtirrmoy",
    "jyatirmay": "jyOtirrmoy",
    "jZOt``snarater": "jZOt``snarater",
    "kaktal": "kak`tal",
    "kaktalIyo": "kak`talIyo",
    "kalbela": "kal`bela",
    "kalbilombe": "kal`bilombe",
    "kalbilombo": "kal`bilombo",
    "kalbOISakhI": "kal`bOISakhI",
    "kalbOIshakhI": "kal`bOIshakhI",
    "kalbOSekhI": "kal`bOSekhI",
    "kalbOshekhI": "kal`bOshekhI",
    "kalke": "kal`ke",
    "kalkrome": "kal`krome",
    "kalprobahe": "kal`probahe",
    "kalprobaho": "kal`probaho",
    "kalprobhab": "kal`probhab",
    "kalprovab": "kal`provab",
    "kalpuruSh": "kal`puruSh",
    "kalrat": "kal`rat",
    "kalratri": "kal`ratri",
    "kalratrire": "kal`ratrire",
    "kamla": "kam`la",
    "kamra": "kam`ra",
    "kangkhito": "kaNgkkhito",
    "kankaTa": "kan`kaTa",
    "kankhaRa": "kan`khaRa",
    "kankO": "kan`kO",
    "kartik": "karrttik",
    "kasba": "kosba",
    "katrani": "kat`rani",
    "katranO": "kat`ranO",
    "kb": "kebi",
    "key": "kee",
    "keyboard": "kibOrrD",
    "keypad": "kI-pyaD",
    "khanni": "khan`ni",
    "kharagpur": "khoRgpur",
    "khelenni": "khelen`ni",
    "khetre": "kkhetre",
    "khetro": "kkhetro",
    "khetrobisheSh": "kkhetrobisheSh",
    "khetrofol": "kxetrofol",
    "khoda": "khOda",
    "khoma": "kxoma",
    "khoti": "kkhoti",
    "khotibriddhi": "kkhotibrriddhi",
    "khotibrriddhi": "kkhotibrriddhi",
    "khotikor": "kkhotikor",
    "khulbe": "khul`be",
    "khulben": "khul`ben",
    "khulbO": "khul`bO",
    "khullam": "khul`lam",
    "khulle": "khul`le",
    "khullen": "khul`len",
    "khulli": "khul`li",
    "kilbil": "kil`bil",
    "kilbile": "kil`bile",
    "kilo": "kilO",
    "kingdom": "kingDom",
    "kintam": "kin`tam",
    "kinte": "kin`te",
    "kinten": "kin`ten",
    "kinti": "kin`ti",
    "kipTa": "kip`Ta",
    "kipTami": "kip`Tami",
    "kipTamO": "kip`TamO",
    "kisu": "kichu",
    "kisui": "kichui",
    "kitchen": "kicen",
    "km": "kimi.`",
    "kobji": "kob`ji",
    "kolkarkhana": "kol`karkhana",
    "kolkata": "kol`kata",
    "kolkobja": "kol`kobja",
    "kolkol": "kol`kol",
    "kolkollOl": "kol`kollOl",
    "kolkonTh": "kol`konTh",
    "kollaN": "kolyaN",
    "kollaNpur": "kolyaNpur",
    "kolma": "kol`ma",
    "kolombaj": "kolom`baj",
    "kolombajI": "kolom`bajI",
    "kOmolmoti": "kOmol`moti",
    "kompokkhe": "kom`pokkhe",
    "konjuspona": "konjus`pona",
    "konkon": "kon`kon",
    "konkonani": "kon`konani",
    "konkone": "kon`kone",
    "konokmoy": "konok`moy",
    "konokmukuT": "konok`mukuT",
    "konokmukuTe": "konok`mukuTe",
    "kOnTa": "kOn`Ta",
    "kOnTi": "kOn`Ti",
    "korenni": "koren`ni",
    "korrtitto": "korrtrritwo",
    "korrtobbo": "korrtobyo",
    "kosrot": "kos`rot",
    "kosrote": "kos`rote",
    "kosroter": "kos`roter",
    "kosrotI": "kos`rotI",
    "koththo": "kothyo",
    "kotokkhani": "kotok`khani",
    "kotokTa": "kotok`Ta",
    "koyekTa": "koyek`Ta",
    "koyekTi": "koyek`Ti",
    "kukkhato": "kukhyato",
    "kulgorima": "kul`gorima",
    "kulgorrbe": "kul`gorrbe",
    "kulgorrbo": "kul`gorrbo",
    "kulgOUrob": "kul`gOUrob",
    "kulgOUrobe": "kul`gOUrobe",
    "kulguru": "kul`guru",
    "kulkaminI": "kul`kaminI",
    "kulkolonker": "kul`kolonker",
    "kulkolonkI": "kul`kolonkI",
    "kulkolonkinI": "kul`kolonkinI",
    "kulkolonko": "kul`kolonko",
    "kulkonya": "kul`konya",
    "kulkuc": "kul`kuc",
    "kulkuca": "kul`kuca",
    "kulkucO": "kul`kucO",
    "kulkul": "kul`kul",
    "kulTa": "kul`Ta",
    "L-)": "L-)",
    "lab": "lyab",
    "lace": "les",
    "lane": "len",
    "language": "lyanguyej",
    "lansdown": "lyansDaun",
    "laptop": "lyap`Top",
    "lassi": "lacchi",
    "launch": "lonc",
    "lawrence": "lorens",
    "lawyer": "loiyar",
    "layer": "leyar",
    "layout": "le`auT",
    "lbw": "el`biDobliu",
    "lcd": "elsiDi",
    "lecture": "lekcar",
    "legal": "ligal",
    "lenovo": "lenOvO",
    "letter": "leTar",
    "letterhead": "leTarheD",
    "lg": "elji",
    "library": "laibreri",
    "life": "laif",
    "light": "laiT",
    "line": "lain",
    "linkin": "lin,,kin",
    "linux": "linax",
    "live": "laiv",
    "llb": "el.`el.`bi",
    "lobby": "lobi",
    "local": "lOkal",
    "location": "lOkeSan",
    "lock": "lok",
    "logic": "lojik",
    "logical": "lojikal",
    "logo": "lOgO",
    "loklok": "lok`lok",
    "london": "lonDon",
    "lotion": "lOSan,,",
    "lounge": "launj",
    "lunch": "lanc",
    "luxury": "laxari",
    "m.b.b.s": "em.`bi.`bi.`es",
    "mac": "myak",
    "macintosh": "myakin`TOsh",
    "machine": "meSin",
    "macro": "myakrO",
    "maddox": "myaDox",
    "magazine": "myagajin",
    "magistrate": "myajisTreT",
    "maharashtra": "moharaShTr",
    "mahatma": "mhatma",
    "mail": "meil",
    "maitreyee": "mOItreyI",
    "majumdar": "mojumdar",
    "maldah": "maldoh",
    "mall": "mol",
    "mallik": "mollik",
    "mallika": "mollika",
    "mamata": "momota",
    "mamla": "mam`la",
    "mamtaj": "momtaj",
    "management": "myanejmenT",
    "manager": "myanejar",
    "managing": "myanejing",
    "mandela": "myanDela",
    "mangOUrob": "man`gOUrob",
    "manmohan": "mon`mOhon",
    "mansommoto": "man`sommoto",
    "mante": "man`te",
    "manten": "man`ten",
    "manti": "man`ti",
    "manto": "man`to",
    "maradona": "maradOna",
    "march": "marrc",
    "market": "marrkeT",
    "markin": "marrkin",
    "marksbad": "marrk`sbad",
    "marx": "marrks",
    "massenger": "mesenjar",
    "matador": "myaTaDor",
    "maths": "myath,,s",
    "maximize": "myaximaij",
    "maximum": "myaximam",
    "mb": "em`bi",
    "mbbs": "em`bi`bi`es",
    "md.": "emDi.`",
    "mechanic": "mekanik",
    "mechanical": "mekanikyal",
    "mechanism": "mekanijm",
    "media": "miDia",
    "medical": "meDikel",
    "medicine": "meDisin",
    "medinipur": "medinIpur",
    "medium": "miDiam",
    "member": "membar",
    "memory": "memOri",
    "mercedes": "marrsiDij",
    "mess": "mes",
    "message": "mesej",
    "messenger": "mesenjar",
    "metric": "meTrik",
    "mexico": "mexikO",
    "micro": "maikrO",
    "microbiology": "maikrObayOloji",
    "microphone": "maikrOfOn",
    "microscope": "maikrOskOp",
    "microsoft": "maikrOsofT",
    "military": "miliTari",
    "mill": "mil",
    "minimize": "minimaij",
    "minimum": "minimam",
    "minister": "minisTar",
    "minus": "mainas",
    "ml": "mili.`",
    "mm": "mimi.`",
    "mms": "em`em`es",
    "mobile": "mObail",
    "mohot": "mohot``",
    "money": "mani",
    "monitor": "moniTor",
    "mongolbar": "mongol`bar",
    "mongolgIt": "mongol`gIt",
    "mongolgroh": "mongol`groh",
    "mongolgroho": "mongol`groho",
    "mongolia": "mongOlia",
    "mongolkamI": "mongol`kamI",
    "mongolkamona": "mongol`kamona",
    "mongolkarI": "mongol`karI",
    "mongolkariNI": "mongol`kariNI",
    "mongolkor": "mongol`kor",
    "mongolmoy": "mongol`moy",
    "morgue": "morrg",
    "morning": "morrning",
    "mother": "madar",
    "motherboard": "madarbOrrD",
    "motor": "mOTor",
    "motorolla": "moTOrOla",
    "mou": "mOU",
    "mount": "maunT",
    "mouse": "maus",
    "mouth": "mauth",
    "movie": "mubhi",
    "mozilla": "mOjila",
    "mrigoya": "mrrigoya",
    "mrinmoy": "mrrinmoy",
    "ms": "em`es",
    "msn": "em`es`en",
    "muffler": "maf,,lar",
    "mukherjee": "mukharrji",
    "multimedia": "malTimiDia",
    "munmun": "mun`mun",
    "museum": "miujiam",
    "music": "miujik",
    "mutton": "maTn",
    "my": "mai",
    "myanmar": "mayan`mar",
    "mymensingh": "moymonosing`h",
    "myspace": "maispes",
    "nakkan": "nak`kan",
    "nakkaTa": "nak`kaTa",
    "nakkhot": "nak`khot",
    "namaskar": "nomoskar",
    "namenni": "namen`ni",
    "nandigram": "nondIgram",
    "napkin": "nyapkin",
    "narayan": "narayN",
    "national": "nyashonal",
    "native": "neTiv",
    "naxal": "noxal",
    "naxalbari": "noxal`baRi",
    "nazmun": "najmun",
    "negro": "nigrO",
    "net": "neT",
    "network": "neT`warrk",
    "new": "niu",
    "news": "niuj",
    "newspaper": "niujpepar",
    "newyork": "niuiyorrk",
    "next": "nexT",
    "nicobar": "nikObar",
    "nidankal": "nidan`kal",
    "nidankale": "nidan`kale",
    "night": "naiT",
    "nimokharam": "nimok`haram",
    "nimokharami": "nimok`harami",
    "niponwave": "nipon`Oyebh",
    "nobel": "nObel",
    "nobombar": "nobom`bar",
    "nojrana": "noj`rana",
    "nokia": "nOkia",
    "nokri": "nok`ri",
    "nolkUp": "nol`kUp",
    "nonsense": "non,,sens",
    "nOnta": "nOn`ta",
    "norokkunDe": "norok`kunDe",
    "norokkunDo": "norok`kunDo",
    "north": "norrth",
    "norton": "norTn",
    "norway": "nor`we",
    "note": "nOT",
    "notebook": "nOTbuk",
    "notepad": "nOTpyaD",
    "notes": "nOT,,s",
    "notification": "nOTifikeSan",
    "nouka": "nOUka",
    "november": "novembor",
    "noyongOcor": "noyon`gOcor",
    "noyonjol": "noyon`jol",
    "noyonkON": "noyon`kON",
    "noyonmoNi": "noyon`moNi",
    "noyonronjon": "noyon`ronjon",
    "noyonsnigdhokor": "noyon`snigdhokor",
    "noyontara": "noyon`tara",
    "noyontaray": "noyon`taray",
    "ntfs": "en`Ti`ef`es",
    "number": "nambar",
    "numeric": "niumerik",
    "nurse": "narrs",
    "nylon": "nailon",
    "o...o": "o...o",
    "O:)": "O:)",
    "O:-)": "O:-)",
    "o_o": "o_o",
    "O_o": "O_o",
    "O_O": "O_O",
    "o-+": "o-+",
    "o=>": "o=>",
    "o->": "o->",
    "o0o": "o0o",
    "O3O": "O3O",
    "obyrrtho": "oby`rrtho",
    "october": "okTObor",
    "odolbodol": "odol`bodol",
    "offic": "ofis",
    "office": "ofis",
    "officer": "ofisar",
    "ogganjonito": "oggan`jonito",
    "oggankrrito": "oggan`krrito",
    "oggantimir": "oggan`timir",
    "ogotta": "ogotya",
    "Ojondar": "Ojon`dar",
    "ok": "Oke",
    "Ok": "Oke",
    "OK": "Oke",
    "okalbarrdhokyo": "okal`barrdhokyo",
    "okalborrShoN": "okal`borrShoN",
    "okalbrriddho": "okal`brriddho",
    "okalbrriShTi": "okal`brriShTi",
    "Okalotnama": "Okalot`nama",
    "Okalotnamate": "Okalot`namate",
    "Okalotnamay": "Okalot`namay",
    "okaTmUrrkho": "okaT`mUrrkho",
    "okaTTo": "okaTyo",
    "okollaN": "okolyaN",
    "okorrtobbo": "okorrtobyo",
    "okoththo": "okothyo",
    "Olkopi": "Ol`kopi",
    "olokmegh": "olok`megh",
    "OlTanO": "Ol`TanO",
    "olympic": "olimpik",
    "omicronlab": "Omikronlyab",
    "Omicronlab": "Omikronlyab",
    "omlanmukh": "omlan`mukh",
    "omlanmukhe": "omlan`mukhe",
    "Omra": "Om`ra",
    "Omrah": "Om`rah,,",
    "oncolprobhab": "oncol`probhab",
    "oncolprovab": "oncol`provab",
    "onekTa": "onek`Ta",
    "onkontuli": "onkon`tuli",
    "onkontulika": "onkon`tulika",
    "onolborrShI": "onol`borrShI",
    "onolborrShoN": "onol`borrShoN",
    "ononna": "ononya",
    "ononno": "ononyo",
    "onudbayI": "onudwayI",
    "onudbeg": "onudweg",
    "onudbigno": "onudwigno",
    "onujjol": "onujjwol",
    "O-O": "O-O",
    "open": "Open",
    "openoffice": "Open`ofis",
    "operating": "opareTing",
    "operation": "opareSan",
    "opomangrostho": "opoman`grostho",
    "opomanjonok": "opoman`jonok",
    "opomanjonokvabe": "opoman`jonokvabe",
    "opomankor": "opoman`kor",
    "optical": "opTikal",
    "option": "op`shon",
    "options": "op`shon,,s",
    "optionti": "op`shon`Ti",
    "orange": "orenj",
    "original": "orijinal",
    "orkut": "orrkuT",
    "orkutbaj": "orrkuTbaj",
    "orkuting": "orrkuTing",
    "orrthat": "orrthat``",
    "os": "Oes",
    "OS": "Oes",
    "osabdhan": "osab`dhan",
    "osabdhane": "osab`dhane",
    "osabdhanI": "osab`dhanI",
    "osabdhanota": "osab`dhanota",
    "oShTombar": "oShTom`bar",
    "osonkho": "osongkhyo",
    "ostacolgamI": "ostacol`gamI",
    "ostacolgoto": "ostacol`goto",
    "otopor": "ot:por",
    "ounce": "auns",
    "out": "auT",
    "outbox": "auTbox",
    "outline": "auTlain",
    "over": "Obhar",
    "overhead": "OvarheD",
    "ovyasmoto": "ovyas`moto",
    "OwO": "OwO",
    "oxford": "oxfOrrD",
    "oxygen": "oxijen",
    "oyoncolon": "oyon`colon",
    "oyonkal": "oyon`kal",
    "pack": "pyak",
    "paediatric": "peDiaTrik",
    "paediatrics": "peDiaTriks",
    "page": "peij",
    "pagla": "pag`la",
    "paglami": "pag`lami",
    "paglamO": "pag`lamO",
    "paglI": "pag`lI",
    "paint": "peinT",
    "painting": "peinTing",
    "palki": "pal`ki",
    "palki-behara": "pal`ki-behara",
    "palmtop": "pamTp",
    "palokmata": "palok`mata",
    "palokmatar": "palok`matar",
    "palta": "palTa",
    "palTa": "pal`Ta",
    "palTanO": "pal`TanO",
    "palTay": "pal`Tay",
    "palTe": "pal`Te",
    "palTi": "pal`Ti",
    "palTiye": "pal`Tiye",
    "pancayet": "poncayet",
    "panel": "pyanel",
    "panroto": "pan`roto",
    "pant": "pyanT",
    "panty": "pyanTi",
    "pappUNyo": "pap`pUNyo",
    "pargana": "porgoNa",
    "park": "parrk",
    "parker": "parrkar",
    "partha": "parrth",
    "partition": "parrTiSon",
    "party": "parrTi",
    "paShaNmoy": "paShaN`moy",
    "patel": "pyaTel",
    "patent": "peTenT",
    "pathology": "pyatholoji",
    "patrika": "potrika",
    "pause": "poj",
    "pc": "pisi",
    "pencil": "pensil",
    "pentagon": "penTagon",
    "perfume": "parfium",
    "pervez": "parrvej",
    "petro": "peTrO",
    "petrol": "peTrOl",
    "pha^ktal": "pha^k`tal",
    "pharmacology": "farrmakOloji",
    "pharmacy": "farrmesi",
    "phatna": "phat`na",
    "phelbe": "phel`be",
    "phelben": "phel`ben",
    "phelbi": "phel`bi",
    "phelbo": "phel`bo",
    "phellam": "phel`lam",
    "phelle": "phel`le",
    "phellen": "phel`len",
    "phelleo": "phel`leo",
    "phelli": "phel`li",
    "phello": "phel`lo",
    "phinki": "phin`ki",
    "phirenni": "phiren`ni",
    "phitna": "phit`na",
    "phone": "fOn",
    "phonetic": "phoneTik",
    "photo": "phTO",
    "photocopy": "fTOkpi",
    "photoshop": "fTOshop",
    "php": "pieicpi",
    "phulbabu": "phul`babu",
    "phulbabura": "phul`babura",
    "phulbagan": "phul`bagan",
    "phulkopi": "phul`kopi",
    "phuslanO": "phus`lanO",
    "phusle": "phus`le",
    "phusliye": "phus`liye",
    "physics": "fijik,,s",
    "picnic": "piknik",
    "picture": "pikcar",
    "piracy": "pairesi",
    "pirate": "paireT",
    "place": "ples",
    "plane": "plen",
    "plate": "pleT",
    "play": "ple",
    "player": "plear",
    "plug": "plag",
    "point": "poyenT",
    "pOkhraj": "pOkh`raj",
    "police": "puliS",
    "political": "poliTikal",
    "politics": "poliTix",
    "poncombar": "poncom`bar",
    "poRenni": "poRen`ni",
    "porjonto": "porrzonto",
    "poroborti": "poroborrtI",
    "port": "pOrrT",
    "portable": "pOrrTeb`l",
    "portugal": "porrtugal",
    "poScimbongo": "poScim`bongo",
    "poshcimbangla": "poshcim`bangla",
    "poshcimbongo": "poshcim`bongo",
    "poshcimbong": "poshcim`bongo",
    "post": "pOsT",
    "postmortem": "pOsTmorrTem",
    "postpaid": "pOsTpeD",
    "potter": "poTar",
    "pound": "paunD",
    "power": "paOyar",
    "powerpoint": "paOyarpoyenT",
    "prabir": "probIr",
    "pradesh": "prodeS",
    "pranab": "pr`N`b",
    "pratiti": "protIti",
    "pregnancy": "preg`nyansi",
    "pregnant": "preg`nyanT",
    "prepaid": "pripeD",
    "presentation": "prejenTeSan",
    "president": "presiDenT",
    "press": "pres",
    "preview": "priviu",
    "prime": "praim",
    "print": "prinT",
    "printer": "prinTar",
    "prize": "praij",
    "processor": "prosesor",
    "product": "prODakT",
    "production":"prODakshn",
    "professional": "prOfes`nal",
    "professor": "prOfesor",
    "profile": "prOfail",
    "program": "prOgram",
    "programme": "prOgram",
    "programming": "prOgraming",
    "progress": "prOgres",
    "project": "prOjekT",
    "projector": "prOjekTor",
    "prokashman": "prokash`man",
    "prokaSman": "prokaS`man",
    "properties": "proparrTij",
    "property": "proparrTi",
    "prothombar": "prothom`bar",
    "prottasha": "protyasha",
    "prottutponnomoti": "protyut``ponnomoti",
    "proyojon": "proyOjon",
    "proyOjonmafik": "proyOjon`mafik",
    "proyOjonmaphik": "proyOjon`maphik",
    "proyOjonmoto": "proyOjon`moto",
    "publish": "pab`liS",
    "publisher": "pab`liSar",
    "pulse": "pal,,s",
    "qB-)": "qB-)",
    "race": "res",
    "racing": "resing",
    "rack": "ryak",
    "racket": "ryakeT",
    "radio": "reDiO",
    "ragging": "ryaging",
    "rail": "rel",
    "railline": "rel`lain",
    "railway": "rel`we",
    "railways": "rel`wej",
    "rajarshi": "rajorrShi",
    "rajat": "rojot",
    "rajpat": "rajpaT",
    "rakhenni": "rakhen`ni",
    "ranabir": "roNobIr",
    "rape": "rep",
    "rashtrapati": "raShTrpoti",
    "rastrapati": "raShTrpoti",
    "raw": "r'",
    "reader": "riDar",
    "recent": "risenT",
    "reception": "risepSan",
    "receptionist": "risepSanisT",
    "recipe": "resipi",
    "recycle": "risaikel",
    "referee": "refaree",
    "refresh": "rifreS",
    "register": "rejisTar",
    "registration": "rejisTreSan",
    "relgaRi": "rel`gaRi",
    "reliance": "rilayens",
    "rellain": "rel`lain",
    "relpoth": "rel`poth",
    "relpothe": "rel`pothe",
    "relpother": "rel`pother",
    "remote": "rimOT",
    "remove": "rimuv",
    "repair": "ripeyar",
    "replace": "riples",
    "resize": "risaij",
    "resolution": "rejOliuSan",
    "restaurant": "resTurenT",
    "rhombus": "rombos",
    "richard": "ricarrD",
    "right": "raiT",
    "rights": "raiT,,s",
    "ringtone": "ringTOn",
    "rituparna": "rrituporrNa",
    "rizwanur": "rij`wanur",
    "rObbar": "rOb`bar",
    "robot": "rOboT",
    "rodon": "rOdon",
    "rOgmukti": "rOg`mukti",
    "rOgmukto": "rOg`mukto",
    "rohman": "roh`man",
    "ronaldinho": "rOnalDinhO",
    "ronaldo": "rOnalDO",
    "rong": "roNg",
    "ronger": "roNger",
    "route": "ruT",
    "row": "rO",
    "rriNgrahI": "rriN`grahI",
    "rriNgrohIta": "rriN`grohIta",
    "rriNgrohoN": "rriN`grohoN",
    "rriNgrostho": "rriN`grostho",
    "rriNmOcon": "rriN`mOcon",
    "rriNmukti": "rriN`mukti",
    "rriNmukto": "rriN`mukto",
    "rss": "ar.`es.`es",
    "RSS": "ar.`es.`es",
    "rubber": "rabar",
    "rugby": "ragbi",
    "rumpa": "rUmpa",
    "rupam": "rUpom",
    "russia": "raSia",
    "sabdhan": "sab`dhan",
    "sabdhanI": "sab`dhanI",
    "sabdhanota": "sab`dhanota",
    "sabyasaci": "sobysacI",
    "saint": "senT",
    "saltlake": "solTlek",
    "samla": "sam`la",
    "samlan": "sam`lan",
    "samlanO": "sam`lanO",
    "samlao": "sam`lao",
    "samna": "sam`na",
    "samnasamni": "sam`nasam`ni",
    "samna-samni": "sam`na-sam`ni",
    "samne": "sam`ne",
    "samni": "sam`ni",
    "samsung": "syamsaNg",
    "sanitary": "syaniTari",
    "sanjana": "sonjona",
    "saptarshi": "soptorrShi",
    "saraswati": "soroswtI",
    "saswata": "SaSwot",
    "satej": "sotej",
    "sauce": "sos",
    "saudi": "sOUdi",
    "saurav": "sOUrobh",
    "save": "sev",
    "scanner": "skyanar",
    "scholar": "skolar",
    "school": "skul",
    "science": "sayens",
    "scooter": "skuTar",
    "scotch": "skoc",
    "scotland": "skoTlyanD",
    "scrap": "skryap",
    "screen": "skreen",
    "scroll": "skrol",
    "scrollbar": "skrol`bar",
    "sealda": "Sialda",
    "sealdah": "Sialdoh",
    "search": "sarrc",
    "sekhetre": "sekkhetre",
    "select": "silekT",
    "semi-final": "semi-fainal",
    "sengupta": "sen`gupt",
    "september": "sepTembor",
    "serial": "sirial",
    "series": "sirij",
    "service": "sarrvis",
    "services": "sarrvises",
    "session": "seSan",
    "set": "seT",
    "setting": "seTing",
    "settings": "seTings,,",
    "sexy": "sexi",
    "shampoo": "shyampu",
    "shanghai": "sang`hai",
    "shankar": "Sonkor",
    "shantiniketan": "Santiniketon",
    "shapla": "shap`la",
    "sharatchandra": "Sorot``condro",
    "share": "sheyar",
    "sharma": "Sorrma",
    "shift": "shifT",
    "shirt": "sharrT",
    "shobdaho": "shob`daho",
    "shobdahok": "shob`dahok",
    "shobdahon": "shob`dahon",
    "shobdeho": "shob`deho",
    "shock": "Sk",
    "shocker": "Skar",
    "shoe": "Su",
    "ShOloana": "ShOlo`ana",
    "shOnni": "shOn`ni",
    "shopping": "Soping",
    "shorot": "shorot``",
    "shortcut": "SorrTkaT",
    "shounak": "SOUnok",
    "show": "SO",
    "shreyasee": "SreysI",
    "shreyasi": "SreysI",
    "shunno": "shunyo",
    "shunnota": "shunyota",
    "shuntam": "shun`tam",
    "shunte": "shun`te",
    "shunten": "shun`ten",
    "shunti": "shun`ti",
    "siddhartha": "siddharrth",
    "siemens": "simens",
    "sign": "sain",
    "signature": "sig`necar",
    "siliguri": "SiliguRi",
    "sIlmOhor": "sIl`mOhor",
    "simanto": "sImant",
    "singapore": "singapur",
    "singh": "sing`h",
    "sir": "syar",
    "site": "saiT",
    "size": "saij",
    "skirt": "skarrT",
    "slide": "slaiD",
    "small": "smol",
    "smart": "smarrT",
    "sms": "es`em`es",
    "Sobdaho": "Sob`daho",
    "Sobdahok": "Sob`dahok",
    "Sobdahon": "Sob`dahon",
    "Sobdeho": "Sob`deho",
    "sobji": "sob`ji",
    "sobkhetre": "sobkxetre",
    "sobkhetro": "sobkxetro",
    "soft": "sofT",
    "software": "sofT`OyZar",
    "soldier": "sOljar",
    "somadhanTi": "somadhan`Ti",
    "somak": "sOmok",
    "sOmbar": "sOm`bar",
    "somen": "sOmen",
    "sommanjonok": "somman`jonok",
    "sommankor": "somman`kor",
    "somrat": "somraT",
    "sonali": "sOnali",
    "sonar": "sOnar",
    "sondha": "sondhya",
    "sondhamaloti": "sondhyamaloti",
    "SOnni": "SOn`ni",
    "sony": "soni",
    "soptombar": "soptom`bar",
    "sot": "sot``",
    "sotti": "sotyi",
    "sotto": "sotyo",
    "soumya": "sOUmyo",
    "soumyajyoti": "sOUmyjyOti",
    "sound": "saunD",
    "source": "sOrrs",
    "south": "sauth",
    "space": "spes",
    "speaker": "spikar",
    "spider": "spaiDar",
    "sports": "spOrrTs",
    "spy": "spai",
    "spycam": "spaikyam",
    "spyware": "spaiOyZar",
    "square": "skOyar",
    "sri": "shrI",
    "srijani": "SrIjonI",
    "srikanta": "SrIkant",
    "srilanka": "SrIlonka",
    "sriman": "shrIman",
    "srimati": "shrImti",
    "srizon": "srrijon",
    "stamp": "sTyamp",
    "stand": "sTyanD",
    "standard": "sTZanDarrD",
    "star": "sTar",
    "start": "sTarrT",
    "states": "sTeT,,s",
    "status": "sTyaTas",
    "steam": "sTim",
    "steering": "sTiaring",
    "sthankalpatro": "sthan`kal`patro",
    "stick": "sTik",
    "stock": "sTk",
    "stool": "sTul",
    "street": "sTriT",
    "string": "sTring",
    "stupid": "sTupiD",
    "style": "sTail",
    "subarna": "suborrNa",
    "subhodip": "shuvodIp",
    "subject": "sab`jekT",
    "suchitra": "sucitra",
    "sudoku": "suDOku",
    "suitcase": "suTkes",
    "suite": "sZuT",
    "suman": "sumon",
    "sumana": "sumona",
    "superman": "suparmyan",
    "support": "sapOrrT",
    "surf": "sarrf",
    "surgery": "sarrjari",
    "swarnendu": "sworrnendu",
    "sweater": "sOyeTar",
    "sweety": "suiTi",
    "swiss": "suis",
    "switch": "suic",
    "sydney": "siDni",
    "syria": "siria",
    "system": "sisTem",
    "T.T": "T.T",
    "T_T": "T_T",
    "tab": "Tyab",
    "tabla": "tob`la",
    "table": "Tebil",
    "tagore": "TegOr",
    "tajmahal": "tajmohol",
    "Takri": "Tak`ri",
    "Talbahana": "Tal`bahana",
    "talgach": "tal`gach",
    "talk": "Tk",
    "talkana": "tal`kana",
    "talmafik": "tal`mafik",
    "talmaphik": "tal`maphik",
    "TalmaTal": "Tal`maTal",
    "talmoto": "tal`moto",
    "talpata": "tal`pata",
    "talpatar": "tal`patar",
    "talpatay": "tal`patay",
    "talpotre": "tal`potre",
    "talpotrer": "tal`potrer",
    "talpotro": "tal`potro",
    "tamali": "tomali",
    "tank": "Tyank",
    "tarzan": "Tarjan",
    "task": "Task",
    "taskbar": "Taskbar",
    "tata": "TaTa",
    "tax": "Tyax",
    "taxi": "Tyaxi",
    "team": "Tim",
    "tech": "Tek",
    "technician": "TekniSian",
    "technology": "TeknOlji",
    "techpointer": "TekpoyenTar",
    "telephone": "TeliphOn",
    "telescope": "TeliskOp",
    "teletalk": "TeliTk",
    "television": "TeliviSan",
    "temni": "tem`ni",
    "temnibhabe": "tem`nibhabe",
    "temnikore": "tem`nikore",
    "temnivabe": "tem`nivabe",
    "temporary": "TempOrari",
    "tennis": "Tenis",
    "testimonial": "TesTimOniyal",
    "text": "TexT",
    "textmate": "TexT`meT",
    "textbox": "TexTbox",
    "textile": "TexTail",
    "tft": "TiefTi",
    "thakenni": "thaken`ni",
    "thaklam": "thak`lam",
    "thakle": "thak`le",
    "thaklo": "thak`lo",
    "Thakrun": "Thak`run",
    "thaktam": "thak`tam",
    "thakte": "thak`te",
    "thakten": "thak`ten",
    "thakti": "thak`ti",
    "thakur": "Thakur",
    "Thandi": "Than`di",
    "Thandidi": "Than`didi",
    "theater": "thiyeTar",
    "Thikmoto": "Thik`moto",
    "ThikThik": "Thik`Thik",
    "ThonThon": "Thon`Thon",
    "ThonThone": "Thon`Thone",
    "threat": "threT",
    "TikTik": "Tik`Tik",
    "TikTiki": "Tik`Tiki",
    "tilottoma": "tilOttoma",
    "time": "Taim",
    "times": "Taim,,s",
    "tingun": "tin`gun",
    "tinjon": "tin`jon",
    "tinjona": "tin`jona",
    "tinkal": "tin`kal",
    "tinrokom": "tin`rokom",
    "tinTa": "tin`Ta",
    "tinTaka": "tin`Taka",
    "tinTane": "tin`Tane",
    "tinTanei": "tin`Tanei",
    "tinTi": "tin`Ti",
    "tintin": "Tin`Tin",
    "Tips": "Tip`s",
    "Tipsohi": "Tip`sohi",
    "Tipsoi": "Tip`soi",
    "TipTip": "Tip`Tip",
    "titanic": "TaiTanik",
    "tobla": "tob`la",
    "tohfa": "tOhfa",
    "toirI": "tOIrI",
    "tokhonkar": "tokhon`kar",
    "toklif": "tok`lif",
    "tokliph": "tok`liph",
    "tokma": "tok`ma",
    "toktok": "tok`tok",
    "TokTok": "Tok`Tok",
    "toktoke": "tok`toke",
    "tokyo": "TOkiyO",
    "tollygunge": "Taligonj",
    "Tolmol": "Tol`mol",
    "tolpeT": "tol`peT",
    "TolTol": "Tol`Tol",
    "TolTole": "Tol`Tole",
    "tomato": "TomeTO",
    "tOmra": "tOm`ra",
    "tOmrai": "tOm`rai",
    "tOmrao": "tOm`rao",
    "tOmratO": "tOm`ratO",
    "tonic": "Tnik",
    "TonTon": "Ton`Ton",
    "TonTonani": "Ton`Tonani",
    "TonTone": "Ton`Tone",
    "tool": "Tool",
    "toolbar": "Tul`bar",
    "tools": "Tuls",
    "torolbuddhi": "torol`buddhi",
    "torolmoti": "torol`moti",
    "torolprokrriti": "torol`prokrriti",
    "torrent": "TorenT",
    "TosTos": "Tos`Tos",
    "TosTosa": "Tos`Tosa",
    "TosTose": "Tos`Tose",
    "total": "TOTal",
    "touchpad": "TacpyaD",
    "touchscreen": "TacskrIn",
    "toufik": "tOUfik",
    "tourism": "Tyurij,,m",
    "tourist": "TyurisT",
    "town": "Taun",
    "tower": "TaoYar",
    "toyota": "ToyOTa",
    "tractor": "TryakTor",
    "trademark": "TreDmarrk",
    "traffic": "Trafik",
    "train": "Tren",
    "trapezium": "Trapijiam",
    "tray": "Tre",
    "trinamul": "trriNomUl",
    "trouser": "Traujar",
    "truck": "Trak",
    "tsunami": "sunami",
    "TT_TT": "TT_TT",
    "tube": "Tiub",
    "tubelight": "Tiub`laiT",
    "Tukra": "Tuk`ra",
    "TukragulO": "Tuk`ragulO",
    "TukraTa": "Tuk`raTa",
    "TukraTakra": "Tuk`raTak`ra",
    "Tukra-Takra": "Tuk`ra-Tak`ra",
    "TukraTi": "Tuk`raTi",
    "Tukri": "Tuk`ri",
    "Tukrite": "Tuk`rite",
    "TukTak": "Tuk`Tak",
    "TukTuke": "Tuk`Tuke",
    "tumpa": "Tumpa",
    "TunTun": "Tun`Tun",
    "TunTuni": "Tun`Tuni",
    "TusTus": "Tus`Tus",
    "TusTusa": "Tus`Tusa",
    "TusTuse": "Tus`Tuse",
    "tv": "Tivi",
    "twitter": "TuiTar",
    "type": "Taip",
    "typing": "Taiping",
    "tyre": "Tayar",
    "uae": "iuei",
    "udbayI": "udwayI",
    "udbek": "udwek",
    "udbigno": "udwigno",
    "uddOg": "udyOg",
    "ujjol": "ujjwol",
    "ulTa": "ul`Ta",
    "ulTanO": "ul`TanO",
    "ulTapalTa": "ul`Tapal`Ta",
    "ulTapiTh": "ul`TapiTh",
    "ulTapiThe": "ul`TapiThe",
    "ulTaroth": "ul`Taroth",
    "ulTarothe": "ul`Tarothe",
    "ulTe": "ul`Te",
    "ulTO": "ul`TO",
    "ulTOpoth": "ul`TOpoth",
    "ulTOroth": "ul`TOroth",
    "under": "anDar",
    "underpant": "anDarpyanT",
    "unibijoy": "iunibijoy",
    "unicode": "iunikOD",
    "uninstall": "an`insTl",
    "union": "iuniyon",
    "unit": "iuniT",
    "united": "iunaiTeD",
    "university": "iunivarrsiTi",
    "update": "apDeT",
    "uponyaskar": "uponyas`kar",
    "uponyaslekhok": "uponyas`lekhok",
    "uponyasrocoyita": "uponyas`rocoyita",
    "ups": "iupies",
    "urine": "iurin",
    "uRonconDI": "uRon`conDI",
    "usb": "iuesbi",
    "user": "iujar",
    "uShno": "uShNo",
    "uThenni": "uThen`ni",
    "utkoT": "ut``koT",
    "utrai": "ut`rai",
    "utralam": "ut`ralam",
    "utralen": "ut`ralen",
    "utrali": "ut`rali",
    "utralO": "ut`ralO",
    "utranO": "ut`ranO",
    "utse": "ut``se",
    "utser": "ut``ser",
    "utso": "ut``so",
    "uttamkumar": "uttomkumar",
    "v.v": "v.v",
    "valobastam": "valobas`tam",
    "valobaste": "valobas`te",
    "valobasten": "valobas`ten",
    "valobasti": "valobas`ti",
    "valobasto": "valobas`to",
    "vasha": "vaSha",
    "version": "varrson",
    "victoria": "vikTOriya",
    "video": "viDio",
    "view": "viu",
    "violin": "vayOlin",
    "virtual": "varrcuyal",
    "vodafone": "vODafOn",
    "volume": "volium",
    "voumik": "vOUmik",
    "wait": "weT",
    "wallpaper": "wal`pepar",
    "warming": "warrming",
    "warning": "warrning",
    "webcam": "Oyebkyam",
    "webmaster": "webmasTar",
    "webpage": "Oyebpej",
    "website": "websaiT",
    "weight": "weT",
    "wellington": "welingTon",
    "west": "wesT",
    "wheel": "huil",
    "whisky": "huiski",
    "wifi": "waifai",
    "wiki": "uiki",
    "wikipedia": "uikipeDia",
    "winamp": "uinaZmp",
    "window": "uinDO",
    "windows": "uinDOj",
    "windscreen": "uinDskrIn",
    "wine": "wain",
    "wipro": "uiprO",
    "wireless": "warles",
    "with": "uith",
    "word": "OarrD",
    "wordpad": "OarrDpyaD",
    "wordpress": "warrDpres",
    "world": "warrlD",
    "wow": "waw",
    "writer": "raiTar",
    "x-(": "x-(",
    "X(": "X(",
    "X_X": "X_X",
    "X3": "X3",
    "xD": "xD",
    "XD": "XD",
    "xerox": "jerox",
    "xhtml": "x`eicTiem`el",
    "xml": "x`em`el",
    "xcode": "xkOD",
    "xp": "xpi",
    "yard": "yarrD",
    "year": "iyar",
    "youtube": "iuTiub",
    "zaman": "jaman",
    "zanni": "zan`ni",
    "zemni": "zem`ni",
    "zemnibhabe": "zem`nibhabe",
    "zemnikore": "zem`nikore",
    "zemnivabe": "zem`nivabe",
    "zia": "jia",
    "zitu": "jitu",
    "zOgandar": "zOgan`dar",
    "zOgandarI": "zOgan`darI",
    "zokhonkar": "zokhon`kar",
    "zokhontokhon": "zokhon`tokhon",
    "zompUrI": "zom`pUrI"
};


var OmicronLab = {};
OmicronLab.Avro = {};

OmicronLab.Avro.Phonetic = {
    parse: function(input) {
        var fixed = this.fixString(input);
        var output = "";
        for(var cur = 0; cur < fixed.length; ++cur) {
            var start = cur, end = cur + 1, prev = start - 1;
            var matched = false;

            for(var i = 0; i < this.data.patterns.length; ++i) {
                var pattern = this.data.patterns[i];
                end = cur + pattern.find.length;
                if(end <= fixed.length && fixed.substring(start, end) == pattern.find) {
                    prev = start - 1;
                    if(typeof pattern.rules !== 'undefined') {
                        for(var j = 0; j < pattern.rules.length; ++j) {
                            var rule = pattern.rules[j];
                            var replace = true;

                            var chk = 0;
                            for(var k=0; k < rule.matches.length; ++k) {
                                var match = rule.matches[k];

                                if(match.type === "suffix") {
                                    chk = end;
                                } 
                                // Prefix
                                else {
                                    chk = prev;
                                }

                                // Handle Negative
                                if(typeof match.negative === 'undefined') {
                                    match.negative = false;
                                    if(match.scope.charAt(0) === '!') {
                                        match.negative = true;
                                        match.scope = match.scope.substring(1);
                                    }
                                }

                                // Handle empty value
                                if(typeof match.value === 'undefined') match.value = '';

                                // Beginning
                                if(match.scope === "punctuation") {
                                    if(
                                        ! (
                                            ((chk < 0) && (match.type === "prefix")) || 
                                            ((chk >= fixed.length) && (match.type === "suffix")) || 
                                            this.isPunctuation(fixed.charAt(chk))
                                        ) ^ match.negative
                                    ) {
                                        replace = false;
                                        break;
                                    }
                                }
                                // Vowel
                                else if(match.scope === "vowel") {
                                    if(
                                        ! (
                                            (
                                                (chk >= 0 && (match.type === "prefix")) || 
                                                (chk < fixed.length && (match.type === "suffix"))
                                            ) && 
                                            this.isVowel(fixed.charAt(chk))
                                        ) ^ match.negative
                                    ) {
                                        replace = false;
                                        break;
                                    }
                                }
                                // Consonant
                                else if(match.scope === "consonant") {
                                    if(
                                        ! (
                                            (
                                                (chk >= 0 && (match.type === "prefix")) || 
                                                (chk < fixed.length && match.type === ("suffix"))
                                            ) && 
                                            this.isConsonant(fixed.charAt(chk))
                                        ) ^ match.negative
                                    ) {
                                        replace = false;
                                        break;
                                    }
                                }
                                // Exact
                                else if(match.scope === "exact") {
                                    var s, e;
                                    if(match.type === "suffix") {
                                        s = end;
                                        e = end + match.value.length;
                                    } 
                                    // Prefix
                                    else {
                                        s = start - match.value.length;
                                        e = start;
                                    }
                                    if(!this.isExact(match.value, fixed, s, e, match.negative)) {
                                        replace = false;
                                        break;
                                    }
                                }
                            }

                            if(replace) {
                                output += rule.replace;
                                cur = end - 1;
                                matched = true;
                                break;
                            }

                        }
                    }
                    if(matched == true) break;

                    // Default
                    output += pattern.replace;
                    cur = end - 1;
                    matched = true;
                    break;
                }
            }

            if(!matched) {
                output += fixed.charAt(cur);
            }
        }
        return output;
    },
    fixString: function(input) {
        var fixed = '';
        for(var i=0; i < input.length; ++i) {
            var cChar = input.charAt(i);
            if(this.isCaseSensitive(cChar)) {
                fixed += cChar;
            } else {
                fixed += cChar.toLowerCase();
            }
        }
        return fixed;
    },
    isVowel: function(c) {
        return (this.data.vowel.indexOf(c.toLowerCase()) >= 0);
    },
    isConsonant: function(c) {
        return (this.data.consonant.indexOf(c.toLowerCase()) >= 0);
    },
    isPunctuation: function(c) {
        return (!(this.isVowel(c) || this.isConsonant(c)));
    },
    isExact: function(needle, heystack, start, end, not) {
        return ((start >= 0 && end < heystack.length && (heystack.substring(start, end)  === needle)) ^ not);
    },
    isCaseSensitive: function(c) {
        return (this.data.casesensitive.indexOf(c.toLowerCase()) >= 0);
    },
    data: {
        "patterns":
        [
            {
                "find":"bhl",
                "replace":"ভ্ল"
            },
            {
                "find":"psh",
                "replace":"পশ"
            },
            {
                "find":"bdh",
                "replace":"ব্ধ"
            },
            {
                "find":"bj",
                "replace":"ব্জ"
            },
            {
                "find":"bd",
                "replace":"ব্দ"
            },
            {
                "find":"bb",
                "replace":"ব্ব"
            },
            {
                "find":"bl",
                "replace":"ব্ল"
            },
            {
                "find":"bh",
                "replace":"ভ"
            },
            {
                "find":"vl",
                "replace":"ভ্ল"
            },
            {
                "find":"b",
                "replace":"ব"
            },
            {
                "find":"v",
                "replace":"ভ"
            },
            {
                "find":"cNG",
                "replace":"চ্ঞ"
            },
            {
                "find":"cch",
                "replace":"চ্ছ"
            },
            {
                "find":"cc",
                "replace":"চ্চ"
            },
            {
                "find":"ch",
                "replace":"ছ"
            },
            {
                "find":"c",
                "replace":"চ"
            },
            {
                "find":"dhn",
                "replace":"ধ্ন"
            },
            {
                "find":"dhm",
                "replace":"ধ্ম"
            },
            {
                "find":"dgh",
                "replace":"দ্ঘ"
            },
            {
                "find":"ddh",
                "replace":"দ্ধ"
            },
            {
                "find":"dbh",
                "replace":"দ্ভ"
            },
            {
                "find":"dv",
                "replace":"দ্ভ"
            },
            {
                "find":"dm",
                "replace":"দ্ম"
            },
            {
                "find":"DD",
                "replace":"ড্ড"
            },
            {
                "find":"Dh",
                "replace":"ঢ"
            },
            {
                "find":"dh",
                "replace":"ধ"
            },
            {
                "find":"dg",
                "replace":"দ্গ"
            },
            {
                "find":"dd",
                "replace":"দ্দ"
            },
            {
                "find":"D",
                "replace":"ড"
            },
            {
                "find":"d",
                "replace":"দ"
            },
            {
                "find":"...",
                "replace":"..."
            },
            {
                "find":".`",
                "replace":"."
            },
            {
                "find":"..",
                "replace":"।।"
            },
            {
                "find":".",
                "replace":"।"
            },
            {
                "find":"ghn",
                "replace":"ঘ্ন"
            },
            {
                "find":"Ghn",
                "replace":"ঘ্ন"
            },
            {
                "find":"gdh",
                "replace":"গ্ধ"
            },
            {
                "find":"Gdh",
                "replace":"গ্ধ"
            },
            {
                "find":"gN",
                "replace":"গ্ণ"
            },
            {
                "find":"GN",
                "replace":"গ্ণ"
            },
            {
                "find":"gn",
                "replace":"গ্ন"
            },
            {
                "find":"Gn",
                "replace":"গ্ন"
            },
            {
                "find":"gm",
                "replace":"গ্ম"
            },
            {
                "find":"Gm",
                "replace":"গ্ম"
            },
            {
                "find":"gl",
                "replace":"গ্ল"
            },
            {
                "find":"Gl",
                "replace":"গ্ল"
            },
            {
                "find":"gg",
                "replace":"জ্ঞ"
            },
            {
                "find":"GG",
                "replace":"জ্ঞ"
            },
            {
                "find":"Gg",
                "replace":"জ্ঞ"
            },
            {
                "find":"gG",
                "replace":"জ্ঞ"
            },
            {
                "find":"gh",
                "replace":"ঘ"
            },
            {
                "find":"Gh",
                "replace":"ঘ"
            },
            {
                "find":"g",
                "replace":"গ"
            },
            {
                "find":"G",
                "replace":"গ"
            },
            {
                "find":"hN",
                "replace":"হ্ণ"
            },
            {
                "find":"hn",
                "replace":"হ্ন"
            },
            {
                "find":"hm",
                "replace":"হ্ম"
            },
            {
                "find":"hl",
                "replace":"হ্ল"
            },
            {
                "find":"h",
                "replace":"হ"
            },
            {
                "find":"jjh",
                "replace":"জ্ঝ"
            },
            {
                "find":"jNG",
                "replace":"জ্ঞ"
            },
            {
                "find":"jh",
                "replace":"ঝ"
            },
            {
                "find":"jj",
                "replace":"জ্জ"
            },
            {
                "find":"j",
                "replace":"জ"
            },
            {
                "find":"J",
                "replace":"জ"
            },
            {
                "find":"kkhN",
                "replace":"ক্ষ্ণ"
            },
            {
                "find":"kShN",
                "replace":"ক্ষ্ণ"
            },
            {
                "find":"kkhm",
                "replace":"ক্ষ্ম"
            },
            {
                "find":"kShm",
                "replace":"ক্ষ্ম"
            },
            {
                "find":"kxN",
                "replace":"ক্ষ্ণ"
            },
            {
                "find":"kxm",
                "replace":"ক্ষ্ম"
            },
            {
                "find":"kkh",
                "replace":"ক্ষ"
            },
            {
                "find":"kSh",
                "replace":"ক্ষ"
            },
            {
                "find":"ksh",
                "replace":"কশ"
            },
            {
                "find":"kx",
                "replace":"ক্ষ"
            },
            {
                "find":"kk",
                "replace":"ক্ক"
            },
            {
                "find":"kT",
                "replace":"ক্ট"
            },
            {
                "find":"kt",
                "replace":"ক্ত"
            },
            {
                "find":"kl",
                "replace":"ক্ল"
            },
            {
                "find":"ks",
                "replace":"ক্স"
            },
            {
                "find":"kh",
                "replace":"খ"
            },
            {
                "find":"k",
                "replace":"ক"
            },
            {
                "find":"lbh",
                "replace":"ল্ভ"
            },
            {
                "find":"ldh",
                "replace":"ল্ধ"
            },
            {
                "find":"lkh",
                "replace":"লখ"
            },
            {
                "find":"lgh",
                "replace":"লঘ"
            },
            {
                "find":"lph",
                "replace":"লফ"
            },
            {
                "find":"lk",
                "replace":"ল্ক"
            },
            {
                "find":"lg",
                "replace":"ল্গ"
            },
            {
                "find":"lT",
                "replace":"ল্ট"
            },
            {
                "find":"lD",
                "replace":"ল্ড"
            },
            {
                "find":"lp",
                "replace":"ল্প"
            },
            {
                "find":"lv",
                "replace":"ল্ভ"
            },
            {
                "find":"lm",
                "replace":"ল্ম"
            },
            {
                "find":"ll",
                "replace":"ল্ল"
            },
            {
                "find":"lb",
                "replace":"ল্ব"
            },
            {
                "find":"l",
                "replace":"ল"
            },
            {
                "find":"mth",
                "replace":"ম্থ"
            },
            {
                "find":"mph",
                "replace":"ম্ফ"
            },
            {
                "find":"mbh",
                "replace":"ম্ভ"
            },
            {
                "find":"mpl",
                "replace":"মপ্ল"
            },
            {
                "find":"mn",
                "replace":"ম্ন"
            },
            {
                "find":"mp",
                "replace":"ম্প"
            },
            {
                "find":"mv",
                "replace":"ম্ভ"
            },
            {
                "find":"mm",
                "replace":"ম্ম"
            },
            {
                "find":"ml",
                "replace":"ম্ল"
            },
            {
                "find":"mb",
                "replace":"ম্ব"
            },
            {
                "find":"mf",
                "replace":"ম্ফ"
            },
            {
                "find":"m",
                "replace":"ম"
            },
            {
                "find":"0",
                "replace":"০"
            },
            {
                "find":"1",
                "replace":"১"
            },
            {
                "find":"2",
                "replace":"২"
            },
            {
                "find":"3",
                "replace":"৩"
            },
            {
                "find":"4",
                "replace":"৪"
            },
            {
                "find":"5",
                "replace":"৫"
            },
            {
                "find":"6",
                "replace":"৬"
            },
            {
                "find":"7",
                "replace":"৭"
            },
            {
                "find":"8",
                "replace":"৮"
            },
            {
                "find":"9",
                "replace":"৯"
            },
            {
                "find":"NgkSh",
                "replace":"ঙ্ক্ষ"
            },
            {
                "find":"Ngkkh",
                "replace":"ঙ্ক্ষ"
            },
            {
                "find":"NGch",
                "replace":"ঞ্ছ"
            },
            {
                "find":"Nggh",
                "replace":"ঙ্ঘ"
            },
            {
                "find":"Ngkh",
                "replace":"ঙ্খ"
            },
            {
                "find":"NGjh",
                "replace":"ঞ্ঝ"
            },
            {
                "find":"ngOU",
                "replace":"ঙ্গৌ"
            },
            {
                "find":"ngOI",
                "replace":"ঙ্গৈ"
            },
            {
                "find":"Ngkx",
                "replace":"ঙ্ক্ষ"
            },
            {
                "find":"NGc",
                "replace":"ঞ্চ"
            },
            {
                "find":"nch",
                "replace":"ঞ্ছ"
            },
            {
                "find":"njh",
                "replace":"ঞ্ঝ"
            },
            {
                "find":"ngh",
                "replace":"ঙ্ঘ"
            },
            {
                "find":"Ngk",
                "replace":"ঙ্ক"
            },
            {
                "find":"Ngx",
                "replace":"ঙ্ষ"
            },
            {
                "find":"Ngg",
                "replace":"ঙ্গ"
            },
            {
                "find":"Ngm",
                "replace":"ঙ্ম"
            },
            {
                "find":"NGj",
                "replace":"ঞ্জ"
            },
            {
                "find":"ndh",
                "replace":"ন্ধ"
            },
            {
                "find":"nTh",
                "replace":"ন্ঠ"
            },
            {
                "find":"NTh",
                "replace":"ণ্ঠ"
            },
            {
                "find":"nth",
                "replace":"ন্থ"
            },
            {
                "find":"nkh",
                "replace":"ঙ্খ"
            },
            {
                "find":"ngo",
                "replace":"ঙ্গ"
            },
            {
                "find":"nga",
                "replace":"ঙ্গা"
            },
            {
                "find":"ngi",
                "replace":"ঙ্গি"
            },
            {
                "find":"ngI",
                "replace":"ঙ্গী"
            },
            {
                "find":"ngu",
                "replace":"ঙ্গু"
            },
            {
                "find":"ngU",
                "replace":"ঙ্গূ"
            },
            {
                "find":"nge",
                "replace":"ঙ্গে"
            },
            {
                "find":"ngO",
                "replace":"ঙ্গো"
            },
            {
                "find":"NDh",
                "replace":"ণ্ঢ"
            },
            {
                "find":"nsh",
                "replace":"নশ"
            },
            {
                "find":"Ngr",
                "replace":"ঙর"
            },
            {
                "find":"NGr",
                "replace":"ঞর"
            },
            {
                "find":"ngr",
                "replace":"ংর"
            },
            {
                "find":"nj",
                "replace":"ঞ্জ"
            },
            {
                "find":"Ng",
                "replace":"ঙ"
            },
            {
                "find":"NG",
                "replace":"ঞ"
            },
            {
                "find":"nk",
                "replace":"ঙ্ক"
            },
            {
                "find":"ng",
                "replace":"ং"
            },
            {
                "find":"nn",
                "replace":"ন্ন"
            },
            {
                "find":"NN",
                "replace":"ণ্ণ"
            },
            {
                "find":"Nn",
                "replace":"ণ্ন"
            },
            {
                "find":"nm",
                "replace":"ন্ম"
            },
            {
                "find":"Nm",
                "replace":"ণ্ম"
            },
            {
                "find":"nd",
                "replace":"ন্দ"
            },
            {
                "find":"nT",
                "replace":"ন্ট"
            },
            {
                "find":"NT",
                "replace":"ণ্ট"
            },
            {
                "find":"nD",
                "replace":"ন্ড"
            },
            {
                "find":"ND",
                "replace":"ণ্ড"
            },
            {
                "find":"nt",
                "replace":"ন্ত"
            },
            {
                "find":"ns",
                "replace":"ন্স"
            },
            {
                "find":"nc",
                "replace":"ঞ্চ"
            },
            {
                "find":"n",
                "replace":"ন"
            },
            {
                "find":"N",
                "replace":"ণ"
            },
            {
                "find":"OI`",
                "replace":"ৈ"
            },
            {
                "find":"OU`",
                "replace":"ৌ"
            },
            {
                "find":"O`",
                "replace":"ো"
            },
            {
                "find":"OI",
                "replace":"ৈ",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"!consonant"
                            }
                        ],
                        "replace":"ঐ"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            }
                        ],
                        "replace":"ঐ"
                    }
                ]
            },
            {
                "find":"OU",
                "replace":"ৌ",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"!consonant"
                            }
                        ],
                        "replace":"ঔ"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            }
                        ],
                        "replace":"ঔ"
                    }
                ]
            },
            {
                "find":"O",
                "replace":"ো",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"!consonant"
                            }
                        ],
                        "replace":"ও"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            }
                        ],
                        "replace":"ও"
                    }
                ]
            },
            {
                "find":"phl",
                "replace":"ফ্ল"
            },
            {
                "find":"pT",
                "replace":"প্ট"
            },
            {
                "find":"pt",
                "replace":"প্ত"
            },
            {
                "find":"pn",
                "replace":"প্ন"
            },
            {
                "find":"pp",
                "replace":"প্প"
            },
            {
                "find":"pl",
                "replace":"প্ল"
            },
            {
                "find":"ps",
                "replace":"প্স"
            },
            {
                "find":"ph",
                "replace":"ফ"
            },
            {
                "find":"fl",
                "replace":"ফ্ল"
            },
            {
                "find":"f",
                "replace":"ফ"
            },
            {
                "find":"p",
                "replace":"প"
            },
            {
                "find":"rri`",
                "replace":"ৃ"
            },
            {
                "find":"rri",
                "replace":"ৃ",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"!consonant"
                            }
                        ],
                        "replace":"ঋ"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            }
                        ],
                        "replace":"ঋ"
                    }
                ]
            },
            {
                "find":"rrZ",
                "replace":"রর‍্য"
            },
            {
                "find":"rry",
                "replace":"রর‍্য"
            },
            {
                "find":"rZ",
                "replace":"র‍্য",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"consonant"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"r"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"y"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"w"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"x"
                            }
                        ],
                        "replace":"্র্য"
                    }
                ]
            },
            {
                "find":"ry",
                "replace":"র‍্য",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"consonant"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"r"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"y"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"w"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"x"
                            }
                        ],
                        "replace":"্র্য"
                    }
                ]
            },
            {
                "find":"rr",
                "replace":"রর",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"!consonant"
                            },
                            {
                                "type":"suffix",
                                "scope":"!vowel"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"r"
                            },
                            {
                                "type":"suffix",
                                "scope":"!punctuation"
                            }
                        ],
                        "replace":"র্"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"consonant"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"r"
                            }
                        ],
                        "replace":"্রর"
                    }
                ]
            },
            {
                "find":"Rg",
                "replace":"ড়্গ"
            },
            {
                "find":"Rh",
                "replace":"ঢ়"
            },
            {
                "find":"R",
                "replace":"ড়"
            },
            {
                "find":"r",
                "replace":"র",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"consonant"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"r"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"y"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"w"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"x"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"Z"
                            }
                        ],
                        "replace":"্র"
                    }
                ]
            },
            {
                "find":"shch",
                "replace":"শ্ছ"
            },
            {
                "find":"ShTh",
                "replace":"ষ্ঠ"
            },
            {
                "find":"Shph",
                "replace":"ষ্ফ"
            },
            {
                "find":"Sch",
                "replace":"শ্ছ"
            },
            {
                "find":"skl",
                "replace":"স্ক্ল"
            },
            {
                "find":"skh",
                "replace":"স্খ"
            },
            {
                "find":"sth",
                "replace":"স্থ"
            },
            {
                "find":"sph",
                "replace":"স্ফ"
            },
            {
                "find":"shc",
                "replace":"শ্চ"
            },
            {
                "find":"sht",
                "replace":"শ্ত"
            },
            {
                "find":"shn",
                "replace":"শ্ন"
            },
            {
                "find":"shm",
                "replace":"শ্ম"
            },
            {
                "find":"shl",
                "replace":"শ্ল"
            },
            {
                "find":"Shk",
                "replace":"ষ্ক"
            },
            {
                "find":"ShT",
                "replace":"ষ্ট"
            },
            {
                "find":"ShN",
                "replace":"ষ্ণ"
            },
            {
                "find":"Shp",
                "replace":"ষ্প"
            },
            {
                "find":"Shf",
                "replace":"ষ্ফ"
            },
            {
                "find":"Shm",
                "replace":"ষ্ম"
            },
            {
                "find":"spl",
                "replace":"স্প্ল"
            },
            {
                "find":"sk",
                "replace":"স্ক"
            },
            {
                "find":"Sc",
                "replace":"শ্চ"
            },
            {
                "find":"sT",
                "replace":"স্ট"
            },
            {
                "find":"st",
                "replace":"স্ত"
            },
            {
                "find":"sn",
                "replace":"স্ন"
            },
            {
                "find":"sp",
                "replace":"স্প"
            },
            {
                "find":"sf",
                "replace":"স্ফ"
            },
            {
                "find":"sm",
                "replace":"স্ম"
            },
            {
                "find":"sl",
                "replace":"স্ল"
            },
            {
                "find":"sh",
                "replace":"শ"
            },
            {
                "find":"Sc",
                "replace":"শ্চ"
            },
            {
                "find":"St",
                "replace":"শ্ত"
            },
            {
                "find":"Sn",
                "replace":"শ্ন"
            },
            {
                "find":"Sm",
                "replace":"শ্ম"
            },
            {
                "find":"Sl",
                "replace":"শ্ল"
            },
            {
                "find":"Sh",
                "replace":"ষ"
            },
            {
                "find":"s",
                "replace":"স"
            },
            {
                "find":"S",
                "replace":"শ"
            },
            {
                "find":"oo`",
                "replace":"ু"
            },
            {
                "find":"oo",
                "replace":"ু",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"!consonant"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"উ"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"উ"
                    }
                ]
            },
            {
                "find":"o`",
                "replace":""
            },
            {
                "find":"oZ",
                "replace":"অ্য"
            },
            {
                "find":"o",
                "replace":"",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"vowel"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"o"
                            }
                        ],
                        "replace":"ও"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"vowel"
                            },
                            {
                                "type":"prefix",
                                "scope":"exact",
                                "value":"o"
                            }
                        ],
                        "replace":"অ"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            }
                        ],
                        "replace":"অ"
                    }
                ]
            },
            {
                "find":"tth",
                "replace":"ত্থ"
            },
            {
                "find":"t``",
                "replace":"ৎ"
            },
            {
                "find":"TT",
                "replace":"ট্ট"
            },
            {
                "find":"Tm",
                "replace":"ট্ম"
            },
            {
                "find":"Th",
                "replace":"ঠ"
            },
            {
                "find":"tn",
                "replace":"ত্ন"
            },
            {
                "find":"tm",
                "replace":"ত্ম"
            },
            {
                "find":"th",
                "replace":"থ"
            },
            {
                "find":"tt",
                "replace":"ত্ত"
            },
            {
                "find":"T",
                "replace":"ট"
            },
            {
                "find":"t",
                "replace":"ত"
            },
            {
                "find":"aZ",
                "replace":"অ্যা"
            },
            {
                "find":"AZ",
                "replace":"অ্যা"
            },
            {
                "find":"a`",
                "replace":"া"
            },
            {
                "find":"A`",
                "replace":"া"
            },
            {
                "find":"a",
                "replace":"া",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"আ"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"!consonant"
                            },
                            {
                                "type":"prefix",
                                "scope":"!exact",
                                "value":"a"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"য়া"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"exact",
                                "value":"a"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"আ"
                    }
                ]
            },
            {
                "find":"i`",
                "replace":"ি"
            },
            {
                "find":"i",
                "replace":"ি",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"!consonant"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"ই"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"ই"
                    }
                ]
            },
            {
                "find":"I`",
                "replace":"ী"
            },
            {
                "find":"I",
                "replace":"ী",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"!consonant"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"ঈ"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"ঈ"
                    }
                ]
            },
            {
                "find":"u`",
                "replace":"ু"
            },
            {
                "find":"u",
                "replace":"ু",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"!consonant"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"উ"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"উ"
                    }
                ]
            },
            {
                "find":"U`",
                "replace":"ূ"
            },
            {
                "find":"U",
                "replace":"ূ",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"!consonant"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"ঊ"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"ঊ"
                    }
                ]
            },
            {
                "find":"ee`",
                "replace":"ী"
            },
            {
                "find":"ee",
                "replace":"ী",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"!consonant"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"ঈ"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"ঈ"
                    }
                ]
            },
            {
                "find":"e`",
                "replace":"ে"
            },
            {
                "find":"e",
                "replace":"ে",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"!consonant"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"এ"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            },
                            {
                                "type":"suffix",
                                "scope":"!exact",
                                "value":"`"
                            }
                        ],
                        "replace":"এ"
                    }
                ]
            },
            {
                "find":"z",
                "replace":"য"
            },
            {
                "find":"Z",
                "replace":"্য"
            },
            {
                "find":"y",
                "replace":"্য",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"!consonant"
                            },
                            {
                                "type":"prefix",
                                "scope":"!punctuation"
                            }
                        ],
                        "replace":"য়"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            }
                        ],
                        "replace":"ইয়"
                    }
                ]
            },
            {
                "find":"Y",
                "replace":"য়"
            },
            {
                "find":"q",
                "replace":"ক"
            },
            {
                "find":"w",
                "replace":"ও",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            },
                            {
                                "type":"suffix",
                                "scope":"vowel"
                            }
                        ],
                        "replace":"ওয়"
                    },
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"consonant"
                            }
                        ],
                        "replace":"্ব"
                    }
                ]
            },
            {
                "find":"x",
                "replace":"ক্স",
                "rules":
                [
                    {
                        "matches":
                        [
                            {
                                "type":"prefix",
                                "scope":"punctuation"
                            }
                        ],
                        "replace":"এক্স"
                    }
                ]
            },
            {
                "find":":`",
                "replace":":"
            },
            {
                "find":":",
                "replace":"ঃ"
            },
            {
                "find":"^`",
                "replace":"^"
            },
            {
                "find":"^",
                "replace":"ঁ"
            },
            {
                "find":",,",
                "replace":"্‌"
            },
            {
                "find":",",
                "replace":","
            },
            {
                "find":"$",
                "replace":"৳"
            },
            {
                "find":"`",
                "replace":""
            }
        ],
        "vowel":"aeiou",
        "consonant":"bcdfghjklmnpqrstvwxyz",
        "casesensitive":"oiudgjnrstyz"
    }
};

function utf8Decode(str) {
    return decodeURIComponent( unescape( str ) );
};

function levenshtein( a, b )
{
    var i;
    var j;
    var cost;
    var d = new Array();

    if ( a.length == 0 )
    {
        return b.length;
    }

    if ( b.length == 0 )
    {
        return a.length;
    }

    for ( i = 0; i <= a.length; i++ )
    {
        d[ i ] = new Array();
        d[ i ][ 0 ] = i;
    }

    for ( j = 0; j <= b.length; j++ )
    {
        d[ 0 ][ j ] = j;
    }

    for ( i = 1; i <= a.length; i++ )
    {
        for ( j = 1; j <= b.length; j++ )
        {
            if ( a.charAt( i - 1 ) == b.charAt( j - 1 ) )
            {
                cost = 0;
            }
            else
            {
                cost = 1;
            }

            d[ i ][ j ] = Math.min( d[ i - 1 ][ j ] + 1, d[ i ][ j - 1 ] + 1, d[ i - 1 ][ j - 1 ] + cost );

            if(
         i > 1 && 
         j > 1 &&  
         a.charAt(i - 1) == b.charAt(j-2) && 
         a.charAt(i-2) == b.charAt(j-1)
         ){
          d[i][j] = Math.min(
            d[i][j],
            d[i - 2][j - 2] + cost
          )

            }
        }
    }

    return d[ a.length ][ b.length ];
};

function SuggestionBuilder(){
    this._init();
}

SuggestionBuilder.prototype = {
    
    _init: function(){
        this._dbSearch = new DBSearch ();
        this._candidateSelections = {};
        this._phoneticCache = {};
        this._loadCandidateSelectionsFromFile();
        this._tempCache = {};
        this._pref = this._defaultPref();
    },
    
    
    _defaultPref: function(){
        var pref = {};
        pref.dictEnable = true;
        
        return pref;
    },
    
    
    _getDictionarySuggestion: function(splitWord){
        var words = [];
        
        var key = splitWord['middle'].toLowerCase();
        
        if (this._phoneticCache[key]){
            words = this._phoneticCache[key].slice(0);
        } else {
            words = this._dbSearch.search(key);
        }
        return words;
    },
    
    
    _getClassicPhonetic: function(banglish){
        return utf8Decode(OmicronLab.Avro.Phonetic.parse(banglish));
    },
    
    
    _correctCase:function (banglish){
        return OmicronLab.Avro.Phonetic.fixString(banglish);
    },
    
    
    _getAutocorrect: function(word, splitWord){
        var corrected = {};
        
        //Search for whole match
        if(autocorrectdb[word]){
            // [smiley rule]
            if (autocorrectdb[word] == word){
                corrected['corrected'] = word;
                corrected['exact'] = true;
            } else {
                corrected['corrected'] = this._getClassicPhonetic(autocorrectdb[word]);
                corrected['exact'] = false;
            }
        } else {
            //Whole word is not present, search without padding
            var correctedMiddle = this._correctCase(splitWord['middle']);
            if(autocorrectdb[correctedMiddle]){
                corrected['corrected'] = this._getClassicPhonetic(autocorrectdb[correctedMiddle]);
                corrected['exact'] = false;
            }
        }
        
        return corrected;
    },
    
    
    _separatePadding: function(word){
        // Feeling lost? Ask Rifat :D
        var match = word.match(/(^(?::`|\.`|[\-\]~!@#%&*()_=+[{}'";<>\/?|.,])*?(?=(?:,{2,}))|^(?::`|\.`|[\-\]~!@#%&*()_=+[{}'";<>\/?|.,])*)(.*?(?:,,)*)((?::`|\.`|[\-\]~!@#%&*()_=+[{}'";<>\/?|.,])*$)/);
        
        var splitWord = {};
        splitWord['begin'] = match[1];
        splitWord['middle'] = match[2];
        splitWord['end'] = match[3];
        
        return splitWord;
    },
    
    
    _sortByPhoneticRelevance: function (phonetic, dictSuggestion){
        //Copy array
        var sortedSuggestion = dictSuggestion.slice(0);
        
        sortedSuggestion.sort(function(a, b){
            var da = levenshtein(phonetic, a);
            var db = levenshtein(phonetic, b);

            if (da < db){
                 return -1;  
            } else if (da > db){
                 return 1;  
            } else{
                return 0;
            }
        });
        
        return sortedSuggestion;
    },
    
    _addToArray: function (arr,item) {
        if (arr.indexOf(item) == -1){
            arr.push(item);
        }
    },
    
    
    _convertToUnicodeValue: function(input){
        var output = '';

        for (var i = 0; i < input.length; i++){
            var charCode = input.charCodeAt(i);
            if (charCode >= 255){
                output += '\\u0' + charCode.toString(16);
            } else {
                output += input.charAt(i);
            }
        }
        return output;
    },
    
    
    _isKar: function(input){
        if (input.length < 1){
            return false;
        }
        var cInput = input.charAt(0);
        return /^[\u09be\u09bf\u09c0\u09c1\u09c2\u09c3\u09c7\u09c8\u09cb\u09cc\u09c4]$/.test(cInput);
    },
    
    
    _isVowel: function(input){
        if (input.length < 1){
            return false;
        }
        var cInput = input.charAt(0);
        return /^[\u0985\u0986\u0987\u0988\u0989\u098a\u098b\u098f\u0990\u0993\u0994\u098c\u09e1\u09be\u09bf\u09c0\u09c1\u09c2\u09c3\u09c7\u09c8\u09cb\u09cc]$/.test(cInput);
    },    
    
    
    _addToTempCache: function(full, base, eng){
        //Don't overwrite
        if (!this._tempCache[full]){
            this._tempCache[full] = {};
            this._tempCache[full].base = base;
            this._tempCache[full].eng = eng;
        }
    },
    
    
    _addSuffix: function(splitWord){
        var tempList = [];
        var fullWord = '';
        var word = splitWord['middle'].toLowerCase();
        var len = word.length;
        
        var rList = [];
        if (this._phoneticCache[word]){
           rList = this._phoneticCache[word].slice(0);
        }
        
        this._tempCache = {};
        
        if (len >= 2){
            for (var j = 1; j <= len; j++){
                var testSuffix = word.substr(j, len);
                
                var suffix = suffixDict[testSuffix];
                if (suffix){
                    var key = word.substr(0, word.length - testSuffix.length); 
                    if (this._phoneticCache[key]){
                        for (var k = 0; k < this._phoneticCache[key].length; k++){
                            var cacheItem = this._phoneticCache[key][k];
                            var cacheRightChar = cacheItem.substr(-1);
                            var suffixLeftChar = suffix.substr(0, 1);
                            if (this._isVowel(cacheRightChar) && this._isKar(suffixLeftChar)){
                                fullWord = cacheItem + "\u09df" + suffix; // \u09df = B_Y
                                tempList.push(fullWord);
                                this._addToTempCache(fullWord, cacheItem, key);
                            } else {
                                if (cacheRightChar == "\u09ce"){ // \u09ce = b_Khandatta
                                    fullWord = cacheItem.substr(0, cacheItem.length - 1) + "\u09a4" + suffix; // \u09a4 = b_T
                                    tempList.push(fullWord);
                                    this._addToTempCache(fullWord, cacheItem, key);
                                } else if (cacheRightChar == "\u0982"){ // \u0982 = b_Anushar
                                    fullWord = cacheItem.substr(0, cacheItem.length - 1) + "\u0999" + suffix; // \u09a4 = b_NGA
                                    tempList.push(fullWord);
                                } else {
                                    fullWord = cacheItem + suffix;
                                    tempList.push(fullWord);
                                    this._addToTempCache(fullWord, cacheItem, key);
                                }
                            }
                        }
                        
                        for (i in tempList){
                            rList.push(tempList[i]);
                        }
                    }
                }
            }
        }
        
        return rList;
    },
    
    
    _joinSuggestion: function(autoCorrect, dictSuggestion, phonetic, splitWord){
        var words = [];
        
        if (!this._pref.dictEnable){
                words.push(phonetic);
                words[0] = splitWord['begin'] + words[0] + splitWord['end'];
            
                var suggestion = {};
                suggestion['words'] = words;
                suggestion['prevSelection'] = 0;
        } else {

                /* 1st Item: Autocorrect */
                if (autoCorrect['corrected']){
                    words.push(autoCorrect['corrected']);
                    //Add autocorrect entry to dictSuggestion for suffix support
                    if (!autoCorrect['exact']){
                        dictSuggestion.push(autoCorrect['corrected']);
                    }
                }
        
        
                /* 2rd Item: Dictionary Avro Phonetic */
                //Update Phonetic Cache
                if(!this._phoneticCache[splitWord['middle'].toLowerCase()]){
                    if (dictSuggestion.length > 0){
                        this._phoneticCache[splitWord['middle'].toLowerCase()] = dictSuggestion.slice(0);
                    }
                }
                //Add Suffix
                var dictSuggestionWithSuffix = this._addSuffix(splitWord);

                var sortedWords = this._sortByPhoneticRelevance(phonetic, dictSuggestionWithSuffix);
                for (var i in sortedWords){
                    this._addToArray(words, sortedWords[i]);
                }
        
                /* 3rd Item: Classic Avro Phonetic */
                this._addToArray(words, phonetic);
        
                var suggestion = {};
        
                //Is there any previous custom selection of the user?
                suggestion['prevSelection'] = this._getPreviousSelection(splitWord, words);
        
                //Add padding to all, except exact autocorrect
                for (var i in words){
                    if (autoCorrect['exact']){
                        if (autoCorrect['corrected'] != words[i]){
                            words[i] = splitWord['begin'] + words[i] + splitWord['end'];
                        }
                    } else {
                        words[i] = splitWord['begin'] + words[i] + splitWord['end'];   
                    }
                }
        
                suggestion['words'] = words;
        
        }
    
        return suggestion;
    },
    
    
    _getPreviousSelection: function (splitWord, suggestionWords){
        var word = splitWord['middle'];
        var len = word.length;
        var selectedWord = '';
        
        if (this._candidateSelections[word]){
            selectedWord = this._candidateSelections[word];
        } else {
            //Full word was not found, try checking without suffix
            if (len >= 2){
                for (var j = 1; j < len; j++){
                    var testSuffix = word.substr(-j).toLowerCase();

                    var suffix = suffixDict[testSuffix];
                    if (suffix){
                        var key = word.substr(0, word.length - testSuffix.length);

                        if (this._candidateSelections[key]){

                            //Get possible words for key
                            var keyWord = this._candidateSelections[key];

                            var kwRightChar = keyWord.substr(-1);
                            var suffixLeftChar = suffix.substr(0, 1);

                            var selectedWord = '';

                            if (this._isVowel(kwRightChar) && this._isKar(suffixLeftChar)){
                                 selectedWord = keyWord + "\u09df" + suffix; // \u09df = B_Y
                             } else {
                                 if (kwRightChar == "\u09ce"){ // \u09ce = b_Khandatta
                                     selectedWord = keyWord.substr(0, keyWord.length - 1) + "\u09a4" + suffix; // \u09a4 = b_T
                                 } else if (kwRightChar == "\u0982"){ // \u0982 = b_Anushar
                                     selectedWord = keyWord.substr(0, keyWord.length - 1) + "\u0999" + suffix; // \u09a4 = b_NGA
                                 } else {
                                     selectedWord = keyWord + suffix;
                                 }
                             }
                             
                             //Save this referrence
                            this._updateCandidateSelection(word, selectedWord);
                            break;
                        }
                    }
                }
            }
        }
        
        var i = suggestionWords.indexOf(selectedWord);
        return (i < 0) ? i = 0 : i;
    },
    
    
    _loadCandidateSelectionsFromFile: function() {
        var filePath = "/home/phablet/.candidate-selections.json" //JsQtTest.StandardPaths.writableLocation(StandardPaths.HomeLocation) + "/.candidate-selections.json" ;

        var request = new XMLHttpRequest()
        var sentSuccessfully = false;

        request.open('GET', filePath)
        request.onreadystatechange = function(event) {
            // The only way i've found to distinguish successful and failed fs write operations using XHR in QML
            //   is to check that request.readyState has got HEADERS_RECEIVED ("send has been called") value before the DONE value
            if (request.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
                sentSuccessfully = true
            }
            if (request.readyState === XMLHttpRequest.DONE) {
                if (!sentSuccessfully) {
                    //this._logger('', 'Error in _loadCandidateSelectionsFromFile');
                    this._candidateSelections = {};
                    return;
                }

                var json = request.responseText
                this._candidateSelections = JSON.parse(json[0]) || {};
                return;
            }
        }
        request.onerror = function(err) {
            this._logger(err, 'Error in _loadCandidateSelectionsFromFile')
        }
        request.send();
    },
           
    _saveCandidateSelectionsToFile: function() {
        var filePath = "/home/phablet/.candidate-selections.json" //JsQtTest.StandardPaths.writableLocation(StandardPaths.HomeLocation) + "/.candidate-selections.json" ;
        var that = this;

        var request = new XMLHttpRequest();
        var sentSuccessfully = false;

        var json = JSON.stringify(that._candidateSelections);
        json = that._convertToUnicodeValue(json);


        request.open("PUT", filePath);
        request.onreadystatechange = function(event) {
            // The only way i've found to distinguish successful and failed fs write operations using XHR in QML
            //   is to check that request.readyState has got HEADERS_RECEIVED ("send has been called") value before the DONE value
            if (request.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
                sentSuccessfully = true
            }

            if (request.readyState === XMLHttpRequest.DONE) {
                if (!sentSuccessfully) {
                    this._logger('', 'Error in _saveCandidateSelectionsToFile')
                }

                this._logger('', '')
            }
        }
        request.onerror = function(err) {
            this._logger(err,'_saveCandidateSelectionsToFile Error')
        }

        request.send(json);
    },        
    

    _updateCandidateSelection: function(word, candidate){
        this._candidateSelections[word] = candidate;
    },
    
    
    
    _logger: function (obj, msg){
    	print ((msg || 'Log') + ': ' + JSON.stringify(obj, null, '\t'));
    },
    
    
    getPref: function(){
        return this._pref;
    },
    
    
    setPref: function(pref){
        //TODO: Add Validation
        this._pref = pref;
    },
    
    
    stringCommitted: function(word, candidate){
        if (!this._pref.dictEnable){
            return;
        }
        
        //If it is called, user made the final decision here
        
        //Check and save selection without suffix if that is not present
        if (this._tempCache[candidate]){
            var base = this._tempCache[candidate].base;
            var eng = this._tempCache[candidate].eng;
            //Don't overwrite existing value
            if (!this._candidateSelections[eng]){
                this._candidateSelections[eng] = base;
                this._saveCandidateSelectionsToFile();
            }
        }
        
        this._saveCandidateSelectionsToFile();
    },
    
    
    updateCandidateSelection: function(word, candidate){
        if (!this._pref.dictEnable){
            return;
        }
        
        //Seperate begining and trailing padding characters, punctuations etc. from whole word
        var splitWord = this._separatePadding(word);
        this._updateCandidateSelection(splitWord['middle'], candidate);
    },
    
    
    suggest: function(word){
        this._init();
        //Seperate begining and trailing padding characters, punctuations etc. from whole word
        var splitWord = this._separatePadding(word);
        
        //Convert begining and trailing padding text to phonetic Bangla
        splitWord['begin'] = this._getClassicPhonetic(splitWord['begin']);
        splitWord['end'] = this._getClassicPhonetic(splitWord['end']);
        
        //Convert the word to Bangla using 3 separate methods 
        var phonetic = this._getClassicPhonetic(splitWord['middle']);
        
        if (this._pref.dictEnable){
            var dictSuggestion = this._getDictionarySuggestion(splitWord);
            var autoCorrect = this._getAutocorrect(word, splitWord);
        }

        //Prepare suggestion object
        var suggestion = this._joinSuggestion(autoCorrect, dictSuggestion, phonetic, splitWord);
        
        return suggestion;
    }
}

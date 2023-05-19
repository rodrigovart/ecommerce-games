-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: loja
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrinho`
--

DROP TABLE IF EXISTS `carrinho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrinho` (
  `carrinho_id` int NOT NULL AUTO_INCREMENT,
  `carrinho_preco` double DEFAULT NULL,
  `carrinho_qtd_produto` int DEFAULT NULL,
  PRIMARY KEY (`carrinho_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrinho`
--

LOCK TABLES `carrinho` WRITE;
/*!40000 ALTER TABLE `carrinho` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrinho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carrinho_temporario`
--

DROP TABLE IF EXISTS `carrinho_temporario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrinho_temporario` (
  `id_carrinho_temporario` int NOT NULL AUTO_INCREMENT,
  `carrinho_temporario_preco_produto` int DEFAULT NULL,
  `carrinho_temporario_qtd_produto` int DEFAULT NULL,
  `carrinho_temporario_id_produto` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_carrinho_temporario`),
  CONSTRAINT `id_produto` FOREIGN KEY (`id_carrinho_temporario`) REFERENCES `produto` (`produto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrinho_temporario`
--

LOCK TABLES `carrinho_temporario` WRITE;
/*!40000 ALTER TABLE `carrinho_temporario` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrinho_temporario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `produto_id` int NOT NULL AUTO_INCREMENT,
  `produto_nome` varchar(100) DEFAULT NULL,
  `produto_descricao` varchar(300) DEFAULT NULL,
  `produto_imagem` varchar(200) DEFAULT NULL,
  `produto_preco` int DEFAULT NULL,
  PRIMARY KEY (`produto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'Overwatch 2','A hero-focused first-person team shooter from Blizzard Entertainment.','https://www.freetogame.com/g/540/thumbnail.jpg',305),(2,'Diablo Immortal','Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.','https://www.freetogame.com/g/521/thumbnail.jpg',393),(3,'Lost Ark','Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.','https://www.freetogame.com/g/517/thumbnail.jpg',345),(4,'PUBG: BATTLEGROUNDS','Get into the action in one of the longest running battle royale games PUBG Battlegrounds.','https://www.freetogame.com/g/516/thumbnail.jpg',388),(5,'Enlisted','Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ','https://www.freetogame.com/g/508/thumbnail.jpg',255),(6,'Forge of Empires','A free to play 2D browser-based online strategy game, become the leader and raise your city.','https://www.freetogame.com/g/345/thumbnail.jpg',4),(7,'Drakensang Online','A free to play browser-based top-down hack-and-slash 3D MMORPG similar to games in the Diablo series.','https://www.freetogame.com/g/427/thumbnail.jpg',279),(8,'MultiVersus','The Warner Bros lineup meets Smash in Player First Games’ MultiVersus.','https://www.freetogame.com/g/525/thumbnail.jpg',495),(9,'Genshin Impact','If you’ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact.','https://www.freetogame.com/g/475/thumbnail.jpg',98),(10,'Fall Guys','Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms. ','https://www.freetogame.com/g/523/thumbnail.jpg',120),(11,'Game Of Thrones Winter Is Coming','A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.','https://www.freetogame.com/g/340/thumbnail.jpg',147),(12,'Dark Knight','A browser-based fantasy MMOARPG wherein players take on the role of a devil hunter descended from the gods.','https://www.freetogame.com/g/445/thumbnail.jpg',82),(13,'Elvenar','A browser based city-building strategy MMO set in the fantasy world of Elvenar.','https://www.freetogame.com/g/347/thumbnail.jpg',30),(14,'Neverwinter','A free-to-play 3D action MMORPG based on the acclaimed Dungeons & Dragons fantasy roleplaying game. ','https://www.freetogame.com/g/11/thumbnail.jpg',68),(15,'Dark Orbit Reloaded','A browser-based 3D space-combat MMO with a massive playerbase!','https://www.freetogame.com/g/380/thumbnail.jpg',105),(16,'Halo Infinite','For the first time ever, a free-to-play Halo experience is available in the form of Halo Infinite’s multiplayer.','https://www.freetogame.com/g/515/thumbnail.jpg',204),(17,'Eternal Fury','A free-to-play ARPG from R2 Games!','https://www.freetogame.com/g/455/thumbnail.jpg',488),(18,'Flyff Universe','Get the full Flyff experience on any platform with the free-to-play browser-based MMORPG Flyff Universe.','https://www.freetogame.com/g/522/thumbnail.jpg',99),(19,'Phantasy Star Online 2 New Genesis','The legacy of Phantasy Star Online 2 continues a thousand years later!','https://www.freetogame.com/g/511/thumbnail.jpg',405),(20,'Crossout','A post-apocalyptic MMO vehicle combat game! ','https://www.freetogame.com/g/5/thumbnail.jpg',301),(21,'World of Warships','A 3D free to play naval action-themed MMO from the creators of World of Tanks! ','https://www.freetogame.com/g/9/thumbnail.jpg',47),(22,'War Thunder','A MMO shooter that puts you in command of hundreds of the finest combat vehicles of World War II.','https://www.freetogame.com/g/12/thumbnail.jpg',148),(23,'World of Tanks','If you like blowing up tanks, with a quick and intense game style you will love this game!','https://www.freetogame.com/g/2/thumbnail.jpg',142),(24,'Tower of Fantasy','Tower of Fantasy is a 3D open-world RPG, anime-style sci-fi MMO RPG game with unique characters and beautiful open vistas!','https://www.freetogame.com/g/529/thumbnail.jpg',447),(25,'Noah’s Heart','Noah’s Heart is an open-world MMORPG game with a focus on exploration and socialization.','https://www.freetogame.com/g/528/thumbnail.jpg',112),(26,'Valorant','Test your mettle in Riot Games’ character-based FPS shooter Valorant.','https://www.freetogame.com/g/466/thumbnail.jpg',106),(27,'Phantasy Star Online 2','Welcome to ARKS, and elite task force searching dangerous planets for the corrupted Falspawn in Phantasy Star 2 Online, Sega’s popular, free-to-play sci-fi MMORPG.','https://www.freetogame.com/g/467/thumbnail.jpg',62),(28,'Call Of Duty: Warzone','A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.','https://www.freetogame.com/g/452/thumbnail.jpg',63),(29,'Destiny 2','A free-to-play multiplayer Sci-Fi MMOFPS from Bungie.','https://www.freetogame.com/g/21/thumbnail.jpg',3),(30,'Dauntless','A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.','https://www.freetogame.com/g/1/thumbnail.jpg',134),(31,'Apex Legends','A free-to-play strategic battle royale game featuring 60-player matches and team-based play. ','https://www.freetogame.com/g/23/thumbnail.jpg',275),(32,'Fortnite','A free-to-play, standalone mode of Epic Game\'s Fortnite. ','https://www.freetogame.com/g/57/thumbnail.jpg',356),(33,'Albion Online','A free-to-play cross-platform sandbox MMO developed and published by Sandbox Interactive GmbH. ','https://www.freetogame.com/g/449/thumbnail.jpg',201),(34,'Blade and Soul','A free-to-play martial arts MMORPG that tasks players with learning combination attacks.','https://www.freetogame.com/g/6/thumbnail.jpg',268),(35,'Brawlhalla','A free-to-play 2D platform fighter inspired by the Smash Bros.','https://www.freetogame.com/g/212/thumbnail.jpg',177),(36,'Trove','A free to play Sandbox massively multiplayer online role-playing game! ','https://www.freetogame.com/g/8/thumbnail.jpg',205),(37,'Heroes & Generals','A World War II-based MMOFPS that mixes infantry, armor, and aircraft.','https://www.freetogame.com/g/202/thumbnail.jpg',445),(38,'Warface','A free-to-play multiplayer online FPS from Crytek, makers of the Far Cry and Crysis series of games.','https://www.freetogame.com/g/207/thumbnail.jpg',393),(39,'Smite','A popular free-to-play 3D MOBA where you take on the role of an ancient god.','https://www.freetogame.com/g/217/thumbnail.jpg',346),(40,'Warframe','A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ','https://www.freetogame.com/g/3/thumbnail.jpg',315),(41,'PlanetSide 2','A free-to-play open-world FPS that pits three factions against each other in a never-ending war.','https://www.freetogame.com/g/243/thumbnail.jpg',454),(42,'Guild Wars 2','A free-to-play MMORPG, the follow-up to ArenaNet\'s popular Guild Wars. ','https://www.freetogame.com/g/13/thumbnail.jpg',215),(43,'Star Trek Online','A free-to-play, 3D, Sci-Fi MMORPG based on the popular Star Trek series.','https://www.freetogame.com/g/14/thumbnail.jpg',62),(44,'RuneScape','A popular 3D browser MMORPG boasting a huge player base and 15 years of content.','https://www.freetogame.com/g/433/thumbnail.jpg',230),(45,'Dead Cide Club','A free-to-play, side-scrolling shooter with a variety of modes and character types to choose from.','https://www.freetogame.com/g/548/thumbnail.jpg',406),(46,'Kartrider: Drift','A free-to-play multiplayer online racing game set in the Kartrider franchise.','https://www.freetogame.com/g/546/thumbnail.jpg',450),(47,'Warlander','A medieval-style combat game with a selection of modes and characters.','https://www.freetogame.com/g/547/thumbnail.jpg',146),(48,'Fangs','A 4v4 MOBA with hero-specific strategies.','https://www.freetogame.com/g/545/thumbnail.jpg',408),(49,'Summoners War: Chronicles','A multi-platform ARPG set in the Summoners War universe.','https://www.freetogame.com/g/549/thumbnail.jpg',11),(50,'Marvel Snap','A fast paced strategy card game set in the Marvel universe.','https://www.freetogame.com/g/541/thumbnail.jpg',170),(51,'World Boss','An experimental FPS based on io and roguelike gameplay.','https://www.freetogame.com/g/542/thumbnail.jpg',150),(52,'Omega Strikers','A 3v3 socccer-style game with knockouts.','https://www.freetogame.com/g/536/thumbnail.jpg',211),(53,'Gundam Evolution','A 6v6 team-based shooter based on the Gundam multiverse','https://www.freetogame.com/g/537/thumbnail.jpg',321),(54,'Deathverse: Let It Die','A game of survival where contestants are pit against each other in a life or death game show.','https://www.freetogame.com/g/539/thumbnail.jpg',225),(55,'Galahad 3093','A 12v12 team shooter featuring mechs based on Arthurian legend.','https://www.freetogame.com/g/544/thumbnail.jpg',394),(56,'Aero Tales Online','Aero Tales Online: The World is a free-to-play 3D anime-style MMORPG with PvP and PvE elements. The game revolves around the “mysterious story of the Key of Skylight”.','https://www.freetogame.com/g/527/thumbnail.jpg',307),(57,'Magic Spellslingers','Magic Spellslingers is the latest entry based on Witzards of the Coast’s popular card game Magic: The Gathering.','https://www.freetogame.com/g/531/thumbnail.jpg',498),(58,'A.V.A Global','A.V.A is a free-to-play online first-person shooter with multiple game modes, unique customizations, as well as PvP and PvE gameplay.','https://www.freetogame.com/g/533/thumbnail.jpg',246),(59,'Lost Light','A post-apocalyptic shooter built around creating a realistic experience.','https://www.freetogame.com/g/534/thumbnail.jpg',67),(60,'Temperia: Soul of Majestic','Fans of collectible card games, are you looking for something a bit different from the normal fare? Then a peek at Moonwolf Entertainment and A2 Softworks’ Temperia: Soul of Majestic might be in order.','https://www.freetogame.com/g/524/thumbnail.jpg',90),(61,'Chimeraland','Explore the open-world sandbox MMO game set in a mythical world. Play as one of a large number of races, from jelly-fish to dragon-person – or even a regular old human if that’s your thing. Explore the land, gather resources, craft items, build homes and more.','https://www.freetogame.com/g/526/thumbnail.jpg',91),(62,'World of Runes','An adorable anime-style MMO featuring cute pets and collectable cards.','https://www.freetogame.com/g/532/thumbnail.jpg',152),(63,'Roller Champions','What if you could player roller derby, but in a more organized and less physically dangerous environment?','https://www.freetogame.com/g/520/thumbnail.jpg',116),(64,'Space Punks','Space Punks is a sci-fi co-op looter shooter with graphics and humor that will likely appeal to the Borderlands fans among us.','https://www.freetogame.com/g/519/thumbnail.jpg',431),(65,'Goose, Goose, DUCK','A social deduction game with geese.','https://www.freetogame.com/g/550/thumbnail.jpg',59),(66,'Swords of Legends Online','Explore a fantasy world based on Chinese mythology in Gameforge’s action MMORPG Swords of Legends Online!','https://www.freetogame.com/g/518/thumbnail.jpg',27),(67,'Super Squad','Prepare yourself. It’s time for Mayhem. Super Squad is a multi-player online shoot-’em-up (or MOSH)!','https://www.freetogame.com/g/513/thumbnail.jpg',412),(68,'Sherwood Extreme','High action arcade shooter Sherwood Extreme sends players on a mission to save the kingdom!','https://www.freetogame.com/g/512/thumbnail.jpg',66),(69,'Smash Legends','Classic fairy tales get wild with 5minlab and LINE Games Corporation’s brawl-action game Smash Legends.','https://www.freetogame.com/g/509/thumbnail.jpg',300),(70,'Drifters Loot the Galaxy','Grab your Driftpacs and grappling hooks, it’s time to loot. Pick a character and dive into Blind Squirrel’s team-based shooter, Drifters Loot the Galaxy.','https://www.freetogame.com/g/510/thumbnail.jpg',106),(71,'Primordials: Battle of Gods','Build armies and fight for control of the realm in Global Dodo Entertainment’s 1v1 strategy game Primordials: Battle of Gods. ','https://www.freetogame.com/g/502/thumbnail.jpg',386),(72,'Super Mecha Champions','Super Mecha Champions is a PC port of the mobile anime PvP game from NetEease, featuring a variety of modes but focusing on battle royale.','https://www.freetogame.com/g/507/thumbnail.jpg',458),(73,'Chroma: Bloom And Blight','Competitive card game fans have a new, completely free option to add to their list. ','https://www.freetogame.com/g/500/thumbnail.jpg',495),(74,'Blankos Block Party','What happens when you take the vinyl collectible toy experience and combine it with an open-world multiplayer game? You get Blankos Block Party!\r\n','https://www.freetogame.com/g/498/thumbnail.jpg',396),(75,'Slapshot: Rebound','Do you like hockey? How about physic-based multiplayer, arcade-style sports games with cute graphics? Well, this is the one for you.','https://www.freetogame.com/g/499/thumbnail.jpg',125),(76,'Rogue Company','From Hi-Rez Studios, the team that brought you Smite and Paladins, comes Rogue Company, a cross-platform, competitive team-based third person shooter.','https://www.freetogame.com/g/476/thumbnail.jpg',428),(77,'Eternal Return: Black Survival','Combining elements from battle royale, MOBA, and the survival genres, Eternal Return: Black Survival is a game designed with a broad audience in mind. ','https://www.freetogame.com/g/477/thumbnail.jpg',330);
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `usuario_id` int NOT NULL AUTO_INCREMENT,
  `usuario_nome` varchar(100) DEFAULT NULL,
  `usuario_email` varchar(100) NOT NULL,
  `usuario_senha` varchar(45) NOT NULL,
  `usuario_foto` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Rodrigo 2','rodrigo@gmail.com','123',NULL),(2,'Rodrigo Vart 91','rodrigo14@email.com','123',NULL),(3,'Rodrigo Vart 71','rodrigo29@email.com','123',NULL),(4,'Rodrigo Vart 1','rodrigo22@email.com','123',NULL),(5,'Rodrigo Vart 77','rodrigo63@email.com','123',NULL),(6,'Rodrigo Vart 29','rodrigo86@email.com','123',NULL),(7,'Rodrigo Vart 59','rodrigo17@email.com','123',NULL),(8,'Rodrigo Vart 56','rodrigo31@email.com','123',NULL),(9,'Rodrigo Vart 61','rodrigo61@email.com','123',NULL),(10,'Rodrigo Vart 68','rodrigo89@email.com','123',NULL),(11,'Rodrigo Vart 26','rodrigo33@email.com','123',NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_permissoes`
--

DROP TABLE IF EXISTS `usuario_permissoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_permissoes` (
  `user_permissions_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `user_permission` int DEFAULT NULL,
  PRIMARY KEY (`user_permissions_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_permissoes`
--

LOCK TABLES `usuario_permissoes` WRITE;
/*!40000 ALTER TABLE `usuario_permissoes` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_permissoes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-19 17:55:50

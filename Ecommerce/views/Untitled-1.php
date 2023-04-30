
$url = 'https://www.freetogame.com/api/games';
        $curl = curl_init();

        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSLVERSION, 3);

        $phoneList = curl_exec($curl);
        
        curl_close($curl);
        
        $jsonArrayResponse = json_decode($phoneList);

        foreach ($jsonArrayResponse as $value) {
            $sql = "INSERT INTO produto (produto_nome, produto_descricao, produto_imagem) VALUES (:nome, :descr, :img)";

            $connection = New Connection();
            $p_sql = $connection->getInstance()->prepare($sql);

            $p_sql->bindValue(":nome", $value->title);
            $p_sql->bindValue(":descr", $value->short_description);
            $p_sql->bindValue(":img", $value->thumbnail);
            $p_sql->execute();
        }
        die;
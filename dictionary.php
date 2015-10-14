<!DOCTYPE html>
<html>
<head>
    <title>Dictionary</title>
    <meta charset="utf-8" />
    <link href="dictionary.css" type="text/css" rel="stylesheet" />
</head>
<body>
<div id="header">
    <h1>My Dictionary</h1>
<!-- Ex. 1: File of Dictionary -->
    <?php $filename = "dictionary"; ?>
    <?php

    $lines = file($filename . ".tsv");

    echo $filename . " has " . count($lines) . " total words and size of ";
    echo filesize($filename  . ".tsv");
    echo " bytes.";
    ?>

</div>
<div class="article">
    <div class="section">
        <h2>Today's words</h2>
<!-- Ex. 2: Today’s Words & Ex 6: Query Parameters -->
        <?php
            $numberOfWords = rand(1, count($lines));
            $todayWords = getWordsByNumber($lines, $numberOfWords);

            ?>
            <ol>
                <?php 
                foreach ($todayWords as $key => $value) {
                ?>
                <li>
                <?php
                    echo strtok($value, "\t") . " - " . strtok("\t");
                }

                function getWordsByNumber($listOfWords, $numberOfWords){
                    $resultArray = array();
                    $count = 0;
                    foreach($listOfWords as $key=>$value){
                        if($key >= $numberOfWords){
                            break;
                        }
                        array_push($resultArray, $value);
                    }
                    return $resultArray;
                }?>
            </ol>
    </div>
    <div class="section">
        <h2>Searching Words</h2>
<!-- Ex. 3: Searching Words & Ex 6: Query Parameters -->
        <?php
            $startCharacter = "D";
            function getWordsByCharacter($listOfWords, $startCharacter){
                $resultArray = array(); 
                foreach($listOfWords as $key=>$value){
                    #echo substr($value , 0, 1);
                    if(substr($value, 0, 1) == $startCharacter){
                        array_push($resultArray, $value);
                    }
                }
                return $resultArray;
            }
            
        ?>
        <p>
            Words that started by <strong><?php echo $startCharacter?></strong> are followings :
        </p>
        <ol>
        <?php
            $searchedWords = getWordsByCharacter($lines, $startCharacter);
            foreach($searchedWords as $value){
            ?>
            <li>
            <?php 
                echo strtok($value, "\t") . " - " . strtok("\t");
            }
        ?>  
        </ol>
    </div>
    <div class="section">
        <h2>List of Words</h2>
<!-- Ex. 4: List of Words & Ex 6: Query Parameters -->
        <?php
            function getWordsByOrder($listOfWords, $orderby){
                $resultArray = $listOfWords;
                if($orderby == 0){
                    sort($resultArray);
                }
                else{
                    rsort($resultArray);
                }
                return $resultArray;
            }
        ?>
        <p>
            All of words ordered by <strong>
            <?php 
                $orderby = 0;
                if($orderby == 0){
                    echo "alphabet order";
                }
                else{
                    echo "alphabet reverse order";
                }
            ?>
            </strong> are followings :
        </p>
        <ol>
            <?php
                $ordered_line = getWordsByOrder($lines, $orderby);
                foreach($ordered_line as $value){
            
                    $words = strtok($value, "\t");
                    $means = strtok("\t");

                    if(strlen($words) > 6){
                ?>  
                    <li class="long">
                <?php
                    }
                    else{
                ?>
                    <li>
                <?php
                    }
                    echo $words . "-" . $means;
                }
                ?>

                <?php
            ?>
        </ol>
    </div>
    <div class="section">
        <h2>Adding Words</h2>
<!-- Ex. 5: Adding Words & Ex 6: Query Parameters -->
        <p>Input word or meaning of the word doesn't exist.</p>
    </div>
</div>
<div id="footer">
    <a href="http://validator.w3.org/check/referer">
        <img src="http://selab.hanyang.ac.kr/courses/cse326/2015/problems/images/w3c-html.png" alt="Valid HTML5" />
    </a>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img src="http://selab.hanyang.ac.kr/courses/cse326/2015/problems/images/w3c-css.png" alt="Valid CSS" />
    </a>
</div>
</body>
</html>

<?

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");


if (CModule::IncludeModule('iBlock')) {
    //getbyid
//  $get = CIBlockElement::GetByID(314);
//  if ($element = $get->fetch()) {
//    echo "<pre>";
//    print_r($element);
//    echo "</pre>";
//  }

    //getlist
//    $sort = ['ID'=>'DESC'];
//    $filter = ['IBLOCK_ID'=>3];
//    $group = false;
//    $nav = ['nPageSize' => 10];
//    $select = ['ID', 'NAME', 'IBLOCK_ID', 'DETAIL_PICTURE'];
//    $get = CIBlockElement::GetList($sort, $filter, $group, $nav, $select);
//    while ($res = $get->GetNext()) { // $get->fetch()
//        echo "<pre>";
//        print_r($res);
//        echo "</pre>";
//        if (!empty($res['DETAIL_PICTURE'])) {
//            $res['IMAGE'] = CFile::GetPath($res['DETAIL_PICTURE']);
//            $result[] = $res;
//        }
//    }

    //add
//    $arrFields = [
//      'NAME'=>'test',
//      'IBLOCK_ID'=>3,
//    ];
//
//    $obj = new CIBlockElement();
//    $res = $obj->Add(($arrFields));
//    print_r($res);
}



?>

<form action="/handle.php" method="post">
    <input type="text" name="" id="">
</form>

<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");
?>

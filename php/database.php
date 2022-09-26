<?php
class Database
{
	
	private static $dbHost = "localhost";
	private static $dbName = "site";
	private static $dbUser = "root";
	private static $dbUserPassword = "";
	private static $connection = null;
		
	public static function connect()
	{
		try
		{
			$connection = new PDO("mysql:host=localhost;dbname=site","root","");
		}
		catch(PDOException $e)
		{
			die($e->getMessage());
		}
		return $connection;
	}
	public static function disconnect()
	{
			$connection=null;
	}
	
	
}

/* 
    require 'php/database.php'; 
    $db=Database::connect(); 
    $competence1=$db->query('SELECT Id, Type, Pourcentage, Couleur, Image FROM competence WHERE Id ="1"');
    $competence2=$db->query('SELECT Id, Type, Pourcentage, Couleur, Image FROM competence WHERE Id ="2"');
    $competence3=$db->query('SELECT Id, Type, Pourcentage, Couleur, Image FROM competence WHERE Id ="3"');
    $competence4=$db->query('SELECT Id, Type, Pourcentage, Couleur, Image FROM competence WHERE Id ="4"');
    $competence5=$db->query('SELECT Id, Type, Pourcentage, Couleur, Image FROM competence WHERE Id ="5"');
    $competence6=$db->query('SELECT Id, Type, Pourcentage, Couleur, Image FROM competence WHERE Id ="6"');
    Database::disconnect(); 
?>
<script>
        var competence1_id = <?php echo json_encode($competence1['Id']); ?>; var competence1_type = <?php echo json_encode($competence1['Type']); ?>; var competence1_pourcentage = <?php echo json_encode($competence1['Pourcentage']); ?>; var competence1_couleur = <?php echo json_encode($competence1['Couleur']); ?>; var competence1_image = <?php echo json_encode($competence1['Image']); ?>;
        var competence2_id = <?php echo json_encode($competence2['Id']); ?>; var competence2_type = <?php echo json_encode($competence2['Type']); ?>; var competence2_pourcentage = <?php echo json_encode($competence2['Pourcentage']); ?>; var competence2_couleur = <?php echo json_encode($competence2['Couleur']); ?>; var competence2_image = <?php echo json_encode($competence2['Image']); ?>;
        var competence3_id = <?php echo json_encode($competence3['Id']); ?>; var competence3_type = <?php echo json_encode($competence3['Type']); ?>; var competence3_pourcentage = <?php echo json_encode($competence3['Pourcentage']); ?>; var competence3_couleur = <?php echo json_encode($competence3['Couleur']); ?>; var competence3_image = <?php echo json_encode($competence3['Image']); ?>;
        var competence4_id = <?php echo json_encode($competence4['Id']); ?>; var competence4_type = <?php echo json_encode($competence4['Type']); ?>; var competence4_pourcentage = <?php echo json_encode($competence4['Pourcentage']); ?>; var competence4_couleur = <?php echo json_encode($competence4['Couleur']); ?>; var competence4_image = <?php echo json_encode($competence4['Image']); ?>;
        var competence5_id = <?php echo json_encode($competence5['Id']); ?>; var competence5_type = <?php echo json_encode($competence5['Type']); ?>; var competence5_pourcentage = <?php echo json_encode($competence5['Pourcentage']); ?>; var competence5_couleur = <?php echo json_encode($competence5['Couleur']); ?>; var competence5_image = <?php echo json_encode($competence5['Image']); ?>;
        var competence6_id = <?php echo json_encode($competence6['Id']); ?>; var competence6_type = <?php echo json_encode($competence6['Type']); ?>; var competence6_pourcentage = <?php echo json_encode($competence6['Pourcentage']); ?>; var competence6_couleur = <?php echo json_encode($competence6['Couleur']); ?>; var competence6_image = <?php echo json_encode($competence6['Image']); ?>;
</script>*/
?>
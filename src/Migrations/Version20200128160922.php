<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200128160922 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE staff (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, image VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE order_link (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, ticket_id INT DEFAULT NULL, show_tour_id INT DEFAULT NULL, quantity INT NOT NULL, price INT NOT NULL, create_at DATETIME NOT NULL, price_total INT NOT NULL, INDEX IDX_7B5DA3E6A76ED395 (user_id), INDEX IDX_7B5DA3E6700047D2 (ticket_id), INDEX IDX_7B5DA3E672BFA0A0 (show_tour_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE animals (id INT AUTO_INCREMENT NOT NULL, category_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, date DATETIME NOT NULL, image VARCHAR(255) NOT NULL, INDEX IDX_966C69DD12469DE2 (category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ticketing (id INT AUTO_INCREMENT NOT NULL, price INT NOT NULL, nb_place INT NOT NULL, group_composition VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE message (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, content VARCHAR(8000) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE spectacle_category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE spectacle (id INT AUTO_INCREMENT NOT NULL, category_id INT DEFAULT NULL, image VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, date DATE NOT NULL, INDEX IDX_E55076F412469DE2 (category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE spectacle_staff (spectacle_id INT NOT NULL, staff_id INT NOT NULL, INDEX IDX_54E34C87C682915D (spectacle_id), INDEX IDX_54E34C87D4D57CD (staff_id), PRIMARY KEY(spectacle_id, staff_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE spectacle_animals (spectacle_id INT NOT NULL, animals_id INT NOT NULL, INDEX IDX_FA073759C682915D (spectacle_id), INDEX IDX_FA073759132B9E58 (animals_id), PRIMARY KEY(spectacle_id, animals_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE show_tour (id INT AUTO_INCREMENT NOT NULL, country_id INT DEFAULT NULL, city VARCHAR(255) NOT NULL, location VARCHAR(255) NOT NULL, begin_at DATETIME NOT NULL, end_at DATETIME NOT NULL, INDEX IDX_B6262FAAF92F3E70 (country_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE animals_category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, country_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, reset_token VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), INDEX IDX_8D93D649F92F3E70 (country_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE country (id INT AUTO_INCREMENT NOT NULL, region VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE order_link ADD CONSTRAINT FK_7B5DA3E6A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE order_link ADD CONSTRAINT FK_7B5DA3E6700047D2 FOREIGN KEY (ticket_id) REFERENCES ticketing (id)');
        $this->addSql('ALTER TABLE order_link ADD CONSTRAINT FK_7B5DA3E672BFA0A0 FOREIGN KEY (show_tour_id) REFERENCES show_tour (id)');
        $this->addSql('ALTER TABLE animals ADD CONSTRAINT FK_966C69DD12469DE2 FOREIGN KEY (category_id) REFERENCES animals_category (id)');
        $this->addSql('ALTER TABLE spectacle ADD CONSTRAINT FK_E55076F412469DE2 FOREIGN KEY (category_id) REFERENCES spectacle_category (id)');
        $this->addSql('ALTER TABLE spectacle_staff ADD CONSTRAINT FK_54E34C87C682915D FOREIGN KEY (spectacle_id) REFERENCES spectacle (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE spectacle_staff ADD CONSTRAINT FK_54E34C87D4D57CD FOREIGN KEY (staff_id) REFERENCES staff (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE spectacle_animals ADD CONSTRAINT FK_FA073759C682915D FOREIGN KEY (spectacle_id) REFERENCES spectacle (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE spectacle_animals ADD CONSTRAINT FK_FA073759132B9E58 FOREIGN KEY (animals_id) REFERENCES animals (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE show_tour ADD CONSTRAINT FK_B6262FAAF92F3E70 FOREIGN KEY (country_id) REFERENCES country (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649F92F3E70 FOREIGN KEY (country_id) REFERENCES country (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE spectacle_staff DROP FOREIGN KEY FK_54E34C87D4D57CD');
        $this->addSql('ALTER TABLE spectacle_animals DROP FOREIGN KEY FK_FA073759132B9E58');
        $this->addSql('ALTER TABLE order_link DROP FOREIGN KEY FK_7B5DA3E6700047D2');
        $this->addSql('ALTER TABLE spectacle DROP FOREIGN KEY FK_E55076F412469DE2');
        $this->addSql('ALTER TABLE spectacle_staff DROP FOREIGN KEY FK_54E34C87C682915D');
        $this->addSql('ALTER TABLE spectacle_animals DROP FOREIGN KEY FK_FA073759C682915D');
        $this->addSql('ALTER TABLE order_link DROP FOREIGN KEY FK_7B5DA3E672BFA0A0');
        $this->addSql('ALTER TABLE animals DROP FOREIGN KEY FK_966C69DD12469DE2');
        $this->addSql('ALTER TABLE order_link DROP FOREIGN KEY FK_7B5DA3E6A76ED395');
        $this->addSql('ALTER TABLE show_tour DROP FOREIGN KEY FK_B6262FAAF92F3E70');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649F92F3E70');
        $this->addSql('DROP TABLE staff');
        $this->addSql('DROP TABLE order_link');
        $this->addSql('DROP TABLE animals');
        $this->addSql('DROP TABLE ticketing');
        $this->addSql('DROP TABLE message');
        $this->addSql('DROP TABLE spectacle_category');
        $this->addSql('DROP TABLE spectacle');
        $this->addSql('DROP TABLE spectacle_staff');
        $this->addSql('DROP TABLE spectacle_animals');
        $this->addSql('DROP TABLE show_tour');
        $this->addSql('DROP TABLE animals_category');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE country');
    }
}

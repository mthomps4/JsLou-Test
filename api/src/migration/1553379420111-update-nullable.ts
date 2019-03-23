import {MigrationInterface, QueryRunner} from "typeorm";

export class updateNullable1553379420111 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "speaker" ADD CONSTRAINT "UQ_f898b972e1f18ea4bdf32dbab54" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "speaker" ALTER COLUMN "bio" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "speaker" ALTER COLUMN "github" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "speaker" ALTER COLUMN "twitter" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "speaker" ALTER COLUMN "website" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "speaker" ALTER COLUMN "extraLinks" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "repos" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "bio" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "github" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "twitter" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "website" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "extraLinks" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "meetupUrl" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "extraLinks" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "UQ_08ba8b04ff4cc591adc5d5a7f24" UNIQUE ("line1")`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "line2" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "city" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "state"`);
        await queryRunner.query(`CREATE TYPE "address_state_enum" AS ENUM('0', '1', '2', '3')`);
        await queryRunner.query(`ALTER TABLE "address" ADD "state" "address_state_enum" NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "state"`);
        await queryRunner.query(`DROP TYPE "address_state_enum"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "state" character varying(2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "city" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "line2" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "UQ_08ba8b04ff4cc591adc5d5a7f24"`);
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "extraLinks" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" ALTER COLUMN "meetupUrl" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "extraLinks" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "website" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "twitter" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "github" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "bio" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "repos" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "speaker" ALTER COLUMN "extraLinks" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "speaker" ALTER COLUMN "website" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "speaker" ALTER COLUMN "twitter" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "speaker" ALTER COLUMN "github" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "speaker" ALTER COLUMN "bio" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "speaker" DROP CONSTRAINT "UQ_f898b972e1f18ea4bdf32dbab54"`);
    }

}

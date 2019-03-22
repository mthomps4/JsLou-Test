import {MigrationInterface, QueryRunner} from "typeorm";

export class eventDatetime1553283821226 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "event" ADD "datetime" TIMESTAMP NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_08ba8b04ff4cc591adc5d5a7f2" ON "address" ("line1") `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_08ba8b04ff4cc591adc5d5a7f2"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "datetime"`);
    }

}

import {
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
} from 'typeorm';

export abstract class BaseEntity {
  @Column({ primary: true, type: 'bigint', generated: 'rowid' })
  public readonly id: string;

  @CreateDateColumn({ type: 'timestamp' })
  public readonly createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public readonly updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  public readonly deletedAt?: Date | null;
}

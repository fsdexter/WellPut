"""empty message

Revision ID: 861b0c17672e
Revises: 75fa1f7bde5f
Create Date: 2021-08-05 17:04:02.528857

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '861b0c17672e'
down_revision = '75fa1f7bde5f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Room',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('city', sa.String(length=120), nullable=True),
    sa.Column('street', sa.String(length=80), nullable=True),
    sa.Column('number', sa.Integer(), nullable=True),
    sa.Column('floor', sa.Integer(), nullable=True),
    sa.Column('door', sa.String(length=80), nullable=True),
    sa.Column('bell', sa.String(length=80), nullable=True),
    sa.Column('neighbourhood', sa.String(length=120), nullable=True),
    sa.Column('price', sa.Integer(), nullable=True),
    sa.Column('deposit', sa.Integer(), nullable=True),
    sa.Column('inclddedService', sa.String(length=120), nullable=True),
    sa.Column('Condition', sa.String(length=120), nullable=True),
    sa.Column('title', sa.String(length=120), nullable=True),
    sa.Column('descripction', sa.String(length=280), nullable=True),
    sa.Column('bed', sa.String(length=80), nullable=True),
    sa.Column('Room', sa.String(length=80), nullable=True),
    sa.Column('Feature', sa.String(length=80), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Assesment_Room',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('room_id', sa.Integer(), nullable=True),
    sa.Column('description', sa.String(length=20), nullable=True),
    sa.ForeignKeyConstraint(['room_id'], ['Room.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Photo_Room',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('room_id', sa.Integer(), nullable=True),
    sa.Column('description', sa.String(length=20), nullable=True),
    sa.ForeignKeyConstraint(['room_id'], ['Room.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('Photo_Room')
    op.drop_table('Assesment_Room')
    op.drop_table('Room')
    # ### end Alembic commands ###

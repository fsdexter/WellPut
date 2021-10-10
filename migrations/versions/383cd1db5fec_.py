"""empty message

Revision ID: 383cd1db5fec
Revises: 
Create Date: 2021-10-10 16:42:59.124648

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '383cd1db5fec'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('characteristic',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=220), nullable=True),
    sa.Column('kind', sa.String(length=20), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('country',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('expense',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('feature',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=20), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('language',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=True),
    sa.Column('locale', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('city',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.Column('lat', sa.Float(precision=15), nullable=True),
    sa.Column('lng', sa.Float(precision=15), nullable=True),
    sa.Column('country_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['country_id'], ['country.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.Column('last_name', sa.String(length=120), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=250), nullable=False),
    sa.Column('birthday', sa.String(length=120), nullable=True),
    sa.Column('phone', sa.String(length=120), nullable=True),
    sa.Column('gender', sa.String(length=120), nullable=True),
    sa.Column('occupation', sa.String(length=120), nullable=True),
    sa.Column('description', sa.String(length=220), nullable=True),
    sa.Column('avatar_url', sa.String(length=220), nullable=True),
    sa.Column('current_room', sa.Integer(), nullable=True),
    sa.Column('temporal_current_room', sa.Integer(), nullable=True),
    sa.Column('city_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['city_id'], ['city.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('characteristic_user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('characteristic_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['characteristic_id'], ['characteristic.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('room',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=8000), nullable=True),
    sa.Column('address', sa.String(length=220), nullable=True),
    sa.Column('country', sa.String(length=120), nullable=True),
    sa.Column('price', sa.Float(), nullable=True),
    sa.Column('deposit', sa.Float(), nullable=True),
    sa.Column('title', sa.String(length=120), nullable=True),
    sa.Column('type_bed', sa.String(length=50), nullable=True),
    sa.Column('lat', sa.Float(precision=15), nullable=True),
    sa.Column('lng', sa.Float(precision=15), nullable=True),
    sa.Column('room_url', sa.String(length=450), nullable=True),
    sa.Column('active_room', sa.Boolean(), nullable=True),
    sa.Column('city_id', sa.Integer(), nullable=True),
    sa.Column('delete_room', sa.Boolean(), nullable=True),
    sa.Column('temporal_renter', sa.Integer(), nullable=True),
    sa.Column('current_renter', sa.Integer(), nullable=True),
    sa.Column('is_favorite', sa.Boolean(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['city_id'], ['city.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('spoken_languages',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('language_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['language_id'], ['language.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('expenses_room',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('room_id', sa.Integer(), nullable=True),
    sa.Column('expense_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['expense_id'], ['expense.id'], ),
    sa.ForeignKeyConstraint(['room_id'], ['room.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorites',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('room_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['room_id'], ['room.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('features_room',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('room_id', sa.Integer(), nullable=True),
    sa.Column('feature_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['feature_id'], ['feature.id'], ),
    sa.ForeignKeyConstraint(['room_id'], ['room.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('room_archive',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('url', sa.String(length=250), nullable=True),
    sa.Column('room_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['room_id'], ['room.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('tenancy',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('room_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['room_id'], ['room.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('review',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comment', sa.String(length=220), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.Column('date', sa.Date(), nullable=True),
    sa.Column('room_id', sa.Integer(), nullable=True),
    sa.Column('renter_id', sa.Integer(), nullable=True),
    sa.Column('tenancy_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['renter_id'], ['user.id'], ),
    sa.ForeignKeyConstraint(['room_id'], ['room.id'], ),
    sa.ForeignKeyConstraint(['tenancy_id'], ['tenancy.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('review')
    op.drop_table('tenancy')
    op.drop_table('room_archive')
    op.drop_table('features_room')
    op.drop_table('favorites')
    op.drop_table('expenses_room')
    op.drop_table('spoken_languages')
    op.drop_table('room')
    op.drop_table('characteristic_user')
    op.drop_table('user')
    op.drop_table('city')
    op.drop_table('language')
    op.drop_table('feature')
    op.drop_table('expense')
    op.drop_table('country')
    op.drop_table('characteristic')
    # ### end Alembic commands ###

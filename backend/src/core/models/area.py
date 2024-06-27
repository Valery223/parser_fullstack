from sqlalchemy.orm import Mapped, mapped_column, relationship

from core.models.base import Base
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from .vacancy import Vacancy

class Area(Base):
    __tablename__ = 'areas'

    id: Mapped[str] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column()
    url: Mapped[str] = mapped_column()

    # Связь с таблицей вакансий
    vacancies: Mapped[list["Vacancy"]] = relationship(back_populates="area")